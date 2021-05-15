<template>
  <v-list-item>
    {{ contact.name }}
  </v-list-item>
</template>

<script>
export default {
  name: 'Contact',

  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
}
</script>
