<template>
  <v-list-item @click="onActivateContact">
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

  methods: {
    onActivateContact() {
      this.$store.commit('setActiveContact', this.contact)
    },
  },
}
</script>
