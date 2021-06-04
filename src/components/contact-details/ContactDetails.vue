<template>
  <v-card width="90%" elevation="10" class="d-flex pa-10">
    <div class="d-flex flex-column justify-space-between mr-8" style="width: 50%">
      <div class="d-flex flex-column justify-center align-center">
        <v-img height="300" width="300" contain :src="contactCardData.photo"></v-img>
        <h1 class="d-flex justify-center display-1 font-weight-bold text-uppercase">
          {{ contactCardData.name }}
        </h1>
      </div>

      <div>
        <v-btn class="mb-5" block large> edit</v-btn>
        <v-btn block large>add to favorites</v-btn>
      </div>
    </div>

    <v-form
      class="d-flex flex-column justify-space-between flex-grow-1"
      style="height: 100%"
      :readonly="readonly"
    >
      <ContactDetailsItem
        v-for="field of contactCardFields"
        :key="field.model"
        :type="field.fieldType"
        :label="field.label"
        :input-model="contactCardData[field.model]"
        :icon="field.icon"
        @modelChanged="inputHandler"
      />
    </v-form>
  </v-card>
</template>

<script>
import { CONTACT_CARD_FIELDS } from '../../common/constants.js'
import ContactDetailsItem from './ContactDetailsItem.vue'

export default {
  name: 'ContactDetails',

  components: { ContactDetailsItem },

  data() {
    return {
      contactCardData: {
        photo: '',
        name: '',
        phone: '',
        birthday: '',
        email: '',
        company: '',
        notes: '',
      },
      contactCardFields: CONTACT_CARD_FIELDS,
      readonly: false,
    }
  },

  computed: {
    activeContact() {
      return this.$store.getters.activeContact
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
    inputHandler(ev) {
      console.log('inputHandler', ev)
    },
  },
}
</script>
