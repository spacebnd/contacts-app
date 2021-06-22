<template>
  <div>
    <v-text-field
      v-if="type === 'text-field'"
      v-model="outputModel"
      :label="startCase(label)"
      :append-icon="icon"
      dense
      outlined
      hide-details
      rounded
      :readonly="!isEditable"
      @input="onModelChange($event, label)"
    />

    <v-textarea
      v-else-if="type === 'text-area'"
      v-model="outputModel"
      :label="startCase(label)"
      :append-icon="icon"
      outlined
      no-resize
      hide-details
      rounded
      :readonly="!isEditable"
      @input="onModelChange($event, label)"
    />

    <DatePicker
      v-else-if="type === 'date-picker'"
      v-model="outputModel"
      :label="startCase(label)"
      :icon="icon"
      :input-date="inputModel"
      :readonly="!isEditable"
      @date-changed="onModelChange($event, label)"
    />
  </div>
</template>

<script>
import _startCase from 'lodash/startCase'
import DatePicker from '../common/DatePicker.vue'

export default {
  name: 'ContactDetailsItem',

  components: {
    DatePicker,
  },

  props: {
    type: {
      type: String,
      required: false,
      default: 'text-field',
    },
    inputModel: {
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
  },

  data() {
    return {
      outputModel: this.inputModel,
    }
  },

  computed: {
    isEditable() {
      return this.$store.getters['ui/isEditable']
    },
  },

  watch: {
    inputModel(newValue) {
      this.outputModel = newValue
    },
  },

  methods: {
    onModelChange(newValue, fieldName) {
      this.$emit('model-changed', newValue, fieldName)
    },

    startCase(value) {
      return _startCase(value)
    },
  },
}
</script>
