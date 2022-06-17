<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="link">
    <a target="_blank" :href="url" :title="title"
      ><font-awesome-icon :icon="icon" /><span class="name">{{ name }}</span></a
    >
  </div>
</template>

<style scoped>
.link .name {
  margin: 10px;
}
.link {
  text-align: center;
  padding: 5px;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}
</style>
