<template>
  <v-container fill-height>
    <v-navigation-drawer app v-model="drawer">
      <ContactsList />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>Contacts</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-switch v-model="$vuetify.theme.dark" />

      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div class="d-flex justify-center" style="height: 550px">
        <ContactDetails v-if="activeContact" />
      </div>
    </v-main>
  </v-container>
</template>

<script>
import ContactsList from '../components/contact-list/ContactList.vue'
import ContactDetails from '../components/contact-details/ContactDetails.vue'

export default {
  name: 'ContactsLayout',

  components: { ContactsList, ContactDetails },

  data: () => ({
    drawer: null,
  }),

  computed: {
    activeContact: function () {
      return this.$store.getters.activeContact
    },
  },
}
</script>
