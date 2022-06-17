<script setup>
defineProps({
  base64: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="verifiable-credential">
    {{btoa(base64)}}
  </div>
</template>

<style scoped>
.verifiable-credential {
  text-align: center;
  padding: 100px;
}
</style>
