<script setup>
import LinkComp from "./LinkComp.vue";
</script>

<template>
  <div class="login">
    <link-comp
      url="https://api.web5.claims/github"
      name="Github"
      icon="fa-brands fa-github"
      title="Get your Github claims"
    />
    <link-comp
      url="https://api.web5.claims/google"
      name="Google"
      icon="fa-brands fa-google"
      title="Get your Google claims"
    />
    <link-comp
      url="https://api.web5.claims/azure"
      name="Azure"
      icon="fa-brands fa-microsoft"
      title="Get your Azure claims"
    />
  </div>
</template>

<style scoped>
.login {
  margin: auto;
  font-size: xx-large;
}
</style>
