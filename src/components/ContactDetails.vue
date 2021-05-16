<template>
  <div>{{ activeContact.name }}</div>
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
