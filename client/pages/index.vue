<template>
  <div>
    <h1>Nuxt App</h1>
    <p v-if="$auth.loggedIn">Hello, {{ $auth.user.name }}</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
