<template>
  <div>
    <div v-if="!isEditable">
      <v-btn class="mb-5" block large rounded @click="onEditClick">edit</v-btn>
      <v-btn block large rounded>add to favorites</v-btn>
    </div>

    <div v-else>
      <v-btn class="mb-5 red--text" block large rounded @click="onCancelClick"> cancel </v-btn>
      <v-btn class="green--text" block large rounded @click="onSaveClick">save</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetailsButtons',

  props: {
    updatedContactData: Object,
  },

  computed: {
    isEditable() {
      return this.$store.getters['ui/isEditable']
    },

    isCreating() {
      return this.$store.getters['ui/isCreating']
    },

    activeContact() {
      return this.$store.getters['contacts/activeContact']
    },
  },

  methods: {
    onEditClick() {
      this.$store.commit('ui/setIsEditable', true)
    },

    onCancelClick() {
      this.$store.commit('ui/setIsEditable', false)

      if (this.isCreating) {
        this.$store.commit('contacts/setActiveContact', null)
        this.$store.commit('ui/setIsCreating', false)
      }
    },

    onSaveClick() {
      if (this.isCreating) {
        this.$store.dispatch('contacts/createContact', this.updatedContactData)
      } else {
        this.$store.dispatch('contacts/updateContact', this.updatedContactData)
      }

      this.$store.commit('ui/setIsEditable', false)
    },
  },
}
</script>
