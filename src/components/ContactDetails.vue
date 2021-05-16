<template>
  <v-card>
    <v-card-title>
      {{ activeContact.name }}
    </v-card-title>
    <v-card-text> phone: {{ activeContact.phone }} </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ContactDetails',

  computed: {
    activeContact() {
      return this.$store.getters.activeContact
    },
  },
}
</script>
