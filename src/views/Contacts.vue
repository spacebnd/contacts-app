<template>
  <v-container>
    <v-navigation-drawer app v-model="drawer"> </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Contacts</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>{{ icons.mdiLogout }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main></v-main>
  </v-container>
</template>

<script>
import { mdiLogout } from '@mdi/js'

export default {
  name: 'Contacts',
  data: () => ({
    drawer: null,
    icons: {
      mdiLogout,
    },
  }),
  mounted() {
    this.$store.dispatch('fetchContactsData')
  },
}
</script>
