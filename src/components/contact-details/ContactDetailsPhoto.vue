<template>
  <div>
    <div style="position: absolute; z-index: 10">
      <v-file-input
        :placeholder="uploadPlaceholder"
        accept="image/png, image/jpeg"
        prepend-inner-icon="mdi-camera"
        prepend-icon=""
        hide-details
        outlined
        rounded
        dense
        ref="fileInput"
        @change="onUpload"
        @click:clear="onClear"
      />
    </div>
    <div style="position: relative">
      <div v-if="photoDataUrl" @click="onDelete" style="z-index: 20">
        <v-icon style="position: absolute; top: 10px; right: 10px; z-index: 20">mdi-delete</v-icon>
      </div>
      <v-img
        :src="photoDataUrl"
        height="300"
        width="300"
        contain
        style="opacity: 0.3; border: 3px dashed red"
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
    uploadPlaceholder: String,
  },

  methods: {
    onUpload(event) {
      this.$emit('file-uploaded', event)
    },

    onClear() {
      this.$emit('clear-clicked')
    },

    onDelete() {
      if (this.uploadedDataUrl) {
        this.$refs.fileInput.clearableCallback()
      }
      this.$emit('delete-clicked')
    },
  },
}
</script>
