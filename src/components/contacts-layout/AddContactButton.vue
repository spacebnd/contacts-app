<template>
  <v-tooltip top open-delay="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        fab
        elevation="10"
        :disabled="isEditable || isCreating"
        @click="onCreateClick"
      >
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </template>
    <span>Create New Contact</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'AddContactButton',

  computed: {
    isEditable() {
      return this.$store.getters['ui/isEditable']
    },

    isCreating() {
      return this.$store.getters['ui/isCreating']
    },
  },

  methods: {
    onCreateClick() {
      this.$store.commit('ui/setIsCreating', true)
      this.$store.commit('ui/setIsEditable', true)
      this.$store.commit('contacts/setActiveContactId', null)
    },
  },
}
</script>
