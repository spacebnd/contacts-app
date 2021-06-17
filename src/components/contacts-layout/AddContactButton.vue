<template>
  <v-tooltip top open-delay="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" fab elevation="10">
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </template>
    <span>Create new contact</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'AddContactButton',
}
</script>
