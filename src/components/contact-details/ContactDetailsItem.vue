<template>
  <div>
    <v-text-field
      v-if="type === 'text-field'"
      v-model="outputModel"
      :label="label"
      :append-icon="icon"
      dense
      outlined
      hide-details
      rounded
      @input="onModelChange"
    />

    <v-textarea
      v-else-if="type === 'text-area'"
      v-model="outputModel"
      :label="label"
      :append-icon="icon"
      outlined
      no-resize
      hide-details
      rounded
      @input="onModelChange"
    />

    <DatePicker
      v-else-if="type === 'date-picker'"
      v-model="outputModel"
      :label="label"
      :icon="icon"
      :input-date="inputModel"
      :readonly="!isEditable"
      @date-changed="onModelChange"
    />
  </div>
</template>

<script>
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
      return this.$store.getters.isEditable
    },
  },

  watch: {
    inputModel(newValue) {
      this.outputModel = newValue
    },
  },

  methods: {
    onModelChange(newValue) {
      this.$emit('model-changed', newValue)
    },
  },
}
</script>
