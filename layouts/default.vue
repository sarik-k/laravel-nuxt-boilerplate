<template>
  <div>
    The Header Section
    <nuxt-link :to="{ name: 'videos' }">Videos</nuxt-link>
    <Nuxt />
    The Footer Section
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
h1 {
  color: blueviolet;
}

.nuxt-link-active {
  color: red;
}
</style>