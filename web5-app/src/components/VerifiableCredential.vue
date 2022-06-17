<script setup>
import { Buffer } from "buffer";
import QRCode from "qrcode";
import { ref } from "vue";
const props = defineProps({
  base64: {
    type: String,
    required: true,
  },
});
const decode = (base64) => {
  return Buffer.from(base64, "base64").toString("utf-8");
};
const decoded = decode(props.base64);
const qrcode = ref(null);
QRCode.toDataURL(decoded).then((qr) => {
  qrcode.value = qr;
});
</script>

<template>
  <div class="verifiable-credential">
    <textarea cols="100" rows="10" v-model="decoded"> </textarea>
    <img :src="qrcode" />
  </div>
</template>

<style scoped>
.verifiable-credential {
  text-align: center;
  padding: 100px;
}
</style>
