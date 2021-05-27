<template>
  <v-card class="d-flex">
    <div>
      <v-img max-height="300" max-width="300" contain :src="activeContact.photo"></v-img>
    </div>

    <div class="flex-grow-1">
      <v-form>
        <v-row dense>
          <v-col :cols="style.inputWidth">
            <v-text-field label="Name" v-model="name" />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col :cols="style.inputWidth">
            <v-text-field label="Phone" v-model="phone"></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col :cols="style.inputWidth">
            <DatePicker :input-date="birthday" @dateChanged="handleInput" />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col :cols="style.inputWidth">
            <v-text-field label="Email" v-model="email"></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col :cols="style.inputWidth">
            <v-text-field label="Company" v-model="company"></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col :cols="style.inputWidth">
            <v-text-field label="Notes" v-model="notes"></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import DatePicker from './common/DatePicker.vue'
export default {
  name: 'ContactDetails',
  components: { DatePicker },
  data() {
    return {
      name: '',
      phone: '',
      birthday: '',
      email: '',
      company: '',
      notes: '',
      style: {
        inputWidth: 6,
      },
    }
  },

  computed: {
    activeContact() {
      return this.$store.getters.activeContact
    },
  },

  mounted() {
    this.name = this.activeContact.name
    this.phone = this.activeContact.phone
    this.birthday = this.activeContact.birthday
    this.company = this.activeContact.company
    this.notes = this.activeContact.notes
  },

  methods: {
    handleInput(ev) {
      console.log('ev', ev)
    },
  },
}
</script>
