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
        :label="label"
        v-model="outputDate"
        readonly
        dense
        outlined
        rounded
        hide-details
        :append-icon="icon"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="outputDate"
      :readonly="readonly"
      @input="menu = false"
      @change="onDateChange"
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
    label: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
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
      this.$emit('date-changed', newValue)
    },
  },
}
</script>
