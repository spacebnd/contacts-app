<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="contact.avatar"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      {{ contact.name }}
    </v-list-item-content>
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
