<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="outputDate"
        label="Picker without buttons"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="outputDate"
      @change="onDateChange"
      @input="menu = false"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'DatePicker',

  props: {
    inputDate: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      outputDate: this.inputDate,
      menu: false,
    }
  },

  watch: {
    inputDate(newValue) {
      this.outputDate = newValue
    },
  },

  methods: {
    onDateChange(newValue) {
      this.$emit('dateChanged', newValue)
    },
  },
}
</script>
