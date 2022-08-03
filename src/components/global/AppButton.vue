<template>
  <button class="btn" :class="type">
    <fa-icon :icon="icon" class="icon mr-1" size="1x" v-if="icon"></fa-icon
    >{{ text }}
  </button>
</template>

<script>
export default {
  name: "AppButtonComponent",
  props: {
    type: { type: String, default: "btn-primary" },
    text: { type: String },
    icon: { type: String }
  },
};
</script>

<style scoped>
.btn {
  padding: 4px;
  border-radius: 10px;
  font-size: small;
}
</style>
