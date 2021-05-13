<template>
  <v-container fill-height>
    <v-card class="mx-auto pa-10 rounded-lg elevation-5" width="400">
      <v-form @submit.prevent="onSubmit">
        <v-container>
          <v-row>
            <v-text-field label="Email" required></v-text-field>
          </v-row>

          <v-row>
            <v-text-field label="Password" required></v-text-field>
          </v-row>

          <v-row justify="center">
            <v-btn type="submit" class="align-center mt-4" elevation="2">Log in</v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Login',

  methods: {
    onSubmit() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>
