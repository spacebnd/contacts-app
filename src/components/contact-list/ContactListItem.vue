<template>
  <v-list-item @click="onContactClick">
    <v-list-item-avatar>
      <v-img :src="contact.photo"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      {{ contact.name }}
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'ContactListItem',

  props: {
    contact: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isEditable() {
      return this.$store.getters['ui/isEditable']
    },

    isCreating() {
      return this.$store.getters['ui/isCreating']
    },
  },

  methods: {
    onContactClick() {
      if (this.isEditable) {
        this.$store.commit('ui/setIsEditable', false)
      }

      if (this.isCreating) {
        this.$store.commit('ui/setIsCreating', false)
      }

      if (this.$vuetify.breakpoint.mobile) {
        this.$store.commit('ui/setIsDrawerOpen', false)
      }

      this.$store.commit('contacts/setActiveContactId', this.contact.id)
    },
  },
}
</script>
