<template>
  <v-list>
    <v-list-item-group>
      <ContactListItem v-for="contact of contacts" :key="contact.id" :contact="contact" />
    </v-list-item-group>
  </v-list>
</template>

<script>
import ContactListItem from './ContactListItem.vue'

export default {
  name: 'ContactList',

  components: {
    ContactListItem,
  },

  data() {
    return {
      contacts: [],
    }
  },

  async mounted() {
    await this.$store.dispatch('fetchContacts')
    this.contacts = this.$store.getters.contacts
  },
}
</script>
