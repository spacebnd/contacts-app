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

      <div>
        <v-btn class="mb-5" block large rounded> edit</v-btn>
        <v-btn block large rounded>add to favorites</v-btn>
      </div>
    </div>

    <v-form class="d-flex flex-column justify-space-between flex-grow-1" :readonly="isReadonly">
      <ContactDetailsItem
        v-for="field of contactCardFields"
        :key="field.model"
        :type="field.fieldType"
        :label="field.label"
        :input-model="contactCardData[field.model]"
        :icon="field.icon"
        :is-readonly="isReadonly"
        @model-changed="onInput"
      />
    </v-form>
  </v-card>
</template>

<script>
import { CONTACT_CARD_FIELDS } from '../../common/constants.js'
import { getBase64 } from '../../common/utils.js'
import ContactDetailsItem from './ContactDetailsItem.vue'
import ContactDetailsPhoto from './ContactDetailsPhoto.vue'

export default {
  name: 'ContactDetails',

  components: { ContactDetailsItem, ContactDetailsPhoto },

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
      isReadonly: false,
    }
  },

  computed: {
    activeContact() {
      return this.$store.getters.activeContact
    },

    uploadInputPlaceholder() {
      return this.contactCardData.photo ? 'Click to change photo' : 'Click to upload photo'
    },
  },

  mounted() {
    this.contactCardData.photo = this.activeContact.photo
    this.contactCardData.name = this.activeContact.name
    this.contactCardData.phone = this.activeContact.phone
    this.contactCardData.birthday = this.activeContact.birthday
    this.contactCardData.email = this.activeContact.email
    this.contactCardData.company = this.activeContact.company
    this.contactCardData.notes = this.activeContact.notes
  },

  methods: {
    onInput(ev) {
      console.log('onInput', ev)
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
