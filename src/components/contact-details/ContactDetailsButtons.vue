<template>
  <div>
    <div v-if="!isEditable">
      <v-btn class="mb-5" block large rounded @click="toggleEditableState">edit</v-btn>
      <v-btn block large rounded>add to favorites</v-btn>
    </div>

    <div v-else>
      <v-btn class="mb-5 red--text" block large rounded @click="toggleEditableState">
        cancel
      </v-btn>
      <v-btn class="green--text" block large rounded @click="saveContactData">save</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetailsButtons',

  computed: {
    isEditable() {
      return this.$store.getters.isEditable
    },

    activeContact() {
      return this.$store.getters.activeContact
    },
  },

  methods: {
    toggleEditableState() {
      this.$store.commit('setIsEditable', !this.isEditable)
    },

    saveContactData() {
      this.$store.dispatch('saveContactData', this.activeContact)
    },
  },
}
</script>
