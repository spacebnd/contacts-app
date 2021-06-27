<template>
  <div class="d-flex flex-column justify-center align-center">
    <div style="position: relative">
      <div v-if="isEditable && photoDataUrl" @click="onDeleteClick" style="z-index: 20">
        <v-icon style="position: absolute; top: 10px; right: 10px; z-index: 20">mdi-delete</v-icon>
      </div>

      <v-img
        :src="photoDataUrl"
        :style="isEditable ? 'opacity: 0.3; border: 3px dashed red' : ''"
        height="300"
        width="300"
        contain
      />
    </div>

    <div style="position: absolute; z-index: 10">
      <v-file-input
        v-if="isEditable"
        ref="fileInput"
        accept="image/png, image/jpeg"
        :placeholder="uploadInputPlaceholder"
        :clearable="true"
        prepend-inner-icon="mdi-camera"
        prepend-icon=""
        hide-details
        dense
        @change="onUpload"
        @click:prepend-inner="onIconClick"
        @click:clear="onClearClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetailsPhoto',

  props: {
    photoDataUrl: {
      type: String,
      required: true,
    },
    uploadedDataUrl: String,
    uploadInputPlaceholder: String,
  },

  computed: {
    isEditable() {
      return this.$store.getters['ui/isEditable']
    },
  },

  methods: {
    onUpload(event) {
      this.$emit('file-uploaded', event)
    },

    onClearClick() {
      this.$emit('clear-clicked')
    },

    onDeleteClick() {
      if (this.uploadedDataUrl) {
        this.$refs.fileInput.clearableCallback()
      }

      this.$emit('delete-clicked')
    },

    onIconClick() {
      this.$refs.fileInput.$refs.input.click()
    },
  },
}
</script>
