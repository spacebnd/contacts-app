<template>
  <v-container fill-height>
    <v-navigation-drawer app v-model="isDrawerOpen">
      <ContactsList />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen" />

      <v-toolbar-title>Contacts</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-switch v-model="$vuetify.theme.dark" />

      <v-tooltip bottom open-delay="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Logout</span>
      </v-tooltip>
    </v-app-bar>

    <v-main>
      <div class="d-flex justify-center" style="height: 550px">
        <ContactDetails v-if="activeContact" />
      </div>
    </v-main>

    <div style="position: absolute; bottom: 30px; right: 30px; z-index: 20">
      <AddContactButton />
    </div>
  </v-container>
</template>

<script>
import ContactsList from '../components/contact-list/ContactList.vue'
import ContactDetails from '../components/contact-details/ContactDetails.vue'
import AddContactButton from '../components/contacts-layout/AddContactButton.vue'

export default {
  name: 'ContactsLayout',

  components: { ContactsList, ContactDetails, AddContactButton },

  computed: {
    isDrawerOpen: {
      get() {
        return this.$store.getters['ui/isDrawerOpen']
      },

      set(value) {
        return this.$store.commit('ui/setIsDrawerOpen', value)
      },
    },

    activeContact() {
      return this.$store.getters['contacts/activeContact']
    },
  },
}
</script>
