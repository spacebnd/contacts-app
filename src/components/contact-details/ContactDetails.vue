<template>
  <v-card class="d-flex pa-10 elevation-10" width="90%">
    <div class="d-flex flex-column justify-space-between mr-8" style="width: 50%">
      <ContactDetailsPhoto
        :photo-data-url="contactCardData.photo"
        :uploaded-data-url="uploadedDataUrl"
        :upload-input-placeholder="uploadInputPlaceholder"
        @file-uploaded="uploadPhoto"
        @clear-clicked="clearUploadPhoto"
        @delete-clicked="deletePhoto"
      />

      <h1 class="d-flex justify-center display-1 font-weight-bold text-uppercase">
        {{ contactCardData.name }}
      </h1>

      <ContactDetailsButtons
        :updated-contact-data="contactCardData"
        @cancel-clicked="updateActiveContact"
      />
    </div>

    <v-form class="d-flex flex-column justify-space-between flex-grow-1" :readonly="!isEditable">
      <ContactDetailsItem
        v-for="field of contactCardFields"
        :key="field.model"
        :type="field.fieldType"
        :label="field.model"
        :input-model="contactCardData[field.model]"
        :icon="field.icon"
        @model-changed="onInput"
      />
    </v-form>
  </v-card>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep'
import { CONTACT_CARD_FIELDS } from '../../common/constants.js'
import { generateEmptyContactTemplate, getBase64 } from '../../common/utils.js'
import ContactDetailsItem from './ContactDetailsItem.vue'
import ContactDetailsPhoto from './ContactDetailsPhoto.vue'
import ContactDetailsButtons from './ContactDetailsButtons.vue'

export default {
  name: 'ContactDetails',

  components: { ContactDetailsItem, ContactDetailsPhoto, ContactDetailsButtons },

  data() {
    return {
      contactCardFields: CONTACT_CARD_FIELDS,
      contactCardData: {
        photo: '',
        name: '',
        phone: '',
        birthday: '',
        email: '',
        company: '',
        notes: '',
      },
      uploadedDataUrl: '',
    }
  },

  watch: {
    activeContact() {
      this.updateActiveContact()
    },
  },

  computed: {
    activeContact() {
      return this.$store.getters['contacts/activeContact']
    },

    isEditable() {
      return this.$store.getters['ui/isEditable']
    },

    isCreating() {
      return this.$store.getters['ui/isCreating']
    },

    uploadInputPlaceholder() {
      return this.contactCardData.photo ? 'Click to change photo' : 'Click to upload photo'
    },
  },

  mounted() {
    this.updateActiveContact()
  },

  methods: {
    updateActiveContact() {
      if (this.isCreating) {
        this.contactCardData = generateEmptyContactTemplate()
      } else {
        this.contactCardData = _cloneDeep(this.activeContact)
      }
    },

    onInput(value, model) {
      this.contactCardData[model] = value
    },

    async uploadPhoto(file) {
      if (file) {
        this.uploadedDataUrl = await getBase64(file)
        this.contactCardData.photo = this.uploadedDataUrl
      }
    },

    clearUploadPhoto() {
      this.contactCardData.photo = this.activeContact.photo
      this.uploadedDataUrl = ''
    },

    deletePhoto() {
      this.contactCardData.photo = ''
    },
  },
}
</script>
