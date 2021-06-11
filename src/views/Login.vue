<template>
  <v-container fill-height>
    <v-card class="mx-auto pa-10 rounded-lg elevation-5" width="400">
      <v-form @submit.prevent="onSubmit">
        <v-text-field label="Email" required solo></v-text-field>

        <v-text-field label="Password" required solo></v-text-field>

        <div class="d-flex justify-center">
          <v-btn type="submit" class="align-center mt-4 elevation-10">Log in</v-btn>
        </div>
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
