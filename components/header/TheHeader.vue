<template>
  <header class="bg-gray-200">
    <nav class="flex justify-between py-6 max-w-screen-xl mx-auto">
      <Logo />
      <ul class="flex">
        <li class="nav-link">
          <nuxt-link :to="{ name: 'index' }" exact>Home</nuxt-link>
        </li>
        <li class="nav-link" v-if="!$auth.loggedIn">
          <nuxt-link :to="{ name: 'auth-login' }">Login</nuxt-link>
        </li>
        <li class="nav-link" v-if="!$auth.loggedIn">
          <nuxt-link :to="{ name: 'auth-register' }">Register</nuxt-link>
        </li>
        <li class="nav-link" v-if="$auth.loggedIn">
          <button @click="logout()">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  .nav-link {
    @apply px-6;
  }
}
</style>