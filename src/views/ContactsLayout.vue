<template>
  <v-container>
    <v-navigation-drawer app v-model="drawer">
      <ContactsList />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Contacts</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>{{ icons.mdiLogout }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-row align="center">
        <v-col align-self="center">
          <ContactDetails v-if="activeContact" />
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
import { mdiLogout } from '@mdi/js'
import ContactsList from '../components/ContacstList'
import ContactDetails from '../components/ContactDetails'

export default {
  name: 'ContactsLayout',

  components: { ContactsList, ContactDetails },

  data: () => ({
    drawer: null,
    icons: {
      mdiLogout,
    },
  }),

  computed: {
    activeContact: function () {
      return this.$store.getters.activeContact
    },
  },
}
</script>
