<template>
  <v-list>
    <v-list-item-group>
      <Contact v-for="contact of contacts" :key="contact.id" :contact="contact" />
    </v-list-item-group>
  </v-list>
</template>

<script>
import Contact from './Contact'

export default {
  name: 'ContactsList',

  components: {
    Contact,
  },

  data() {
    return {
      contacts: [],
    }
  },

  async mounted() {
    await this.$store.dispatch('fetchContactsData')
    this.contacts = this.$store.getters.contactsData
  },
}
</script>
