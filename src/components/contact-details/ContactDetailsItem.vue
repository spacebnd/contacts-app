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
      @input="onModelChange"
    />

    <DatePicker
      v-else-if="type === 'date-picker'"
      v-model="outputModel"
      :label="label"
      :icon="icon"
      :input-date="inputModel"
      :readonly="readonly"
      @dateChanged="onModelChange"
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

  data() {
    return {
      outputModel: this.inputModel,
    }
  },

  watch: {
    inputModel(newValue) {
      this.outputModel = newValue
    },
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
    readonly: {
      type: Boolean,
      required: false,
    },
  },

  methods: {
    onModelChange(newValue) {
      this.$emit('modelChanged', newValue)
    },
  },
}
</script>
