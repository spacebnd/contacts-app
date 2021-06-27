<template>
  <v-tooltip top open-delay="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" fab elevation="10" @click="openCreatingContact">
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </template>
    <span>Create New Contact</span>
  </v-tooltip>
</template>

<script>
import { generateEmptyContactTemplate } from '../../common/utils.js'

export default {
  name: 'AddContactButton',

  methods: {
    openCreatingContact() {
      const template = generateEmptyContactTemplate()
      this.$store.commit('contacts/setActiveContact', template)
      this.$store.commit('ui/setIsCreating', true)
      this.$store.commit('ui/setIsEditable', true)
    },
  },
}
</script>
