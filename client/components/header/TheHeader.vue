<template>
  <header class="bg-gray-200">
    <nav class="flex justify-between py-6 max-w-screen-xl mx-auto">
      <Logo />
      <ul class="flex">
        <li class="nav-link">
          <nuxt-link :to="{ name: 'index' }" exact>Home</nuxt-link>
        </li>
        <li class="nav-link relative group" v-if="!$auth.loggedIn">
          <div class="flex items-center">
            <nuxt-link :to="{ name: 'auth-login' }">Login</nuxt-link>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
          <div
            class="
              flex flex-col
              bg-white
              mt-4
              rounded-md
              absolute
              right-5
              shadow-md
              opacity-0
              group-hover:opacity-100
              transition
            "
          >
            <nuxt-link
              :to="{ name: 'auth-register' }"
              class="hover:bg-gray-200 px-4 py-2 block"
            >
              Register
            </nuxt-link>
            <nuxt-link
              :to="{ name: 'auth-register' }"
              class="hover:bg-gray-200 px-4 py-2 block"
            >
              Register
            </nuxt-link>
            <nuxt-link
              :to="{ name: 'auth-register' }"
              class="hover:bg-gray-200 px-4 py-2 block"
            >
              Register
            </nuxt-link>
          </div>
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