<template>
  <div class="container mx-auto py-4 max-w-screen-xl">
    <div class="">
      <h1 class="text-xl font-bold">Reset Password</h1>
      <p>
        Reset your password by filling in your username or e-mail address. You
        will then receive an email with a link that will let you enter a new
        password.
      </p>
      <form @submit.prevent="resetPassword()">
        <div>
          <label for="email">Enter your email address: </label>
          <input
            type="email"
            name="email"
            class="border-2"
            v-model="form.email"
          />
        </div>
        <div class="flex justify-between">
          <nuxt-link :to="{ name: 'auth-login' }">Back to Login</nuxt-link>
          <button type="submit">Send Reset Instructions</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
      },
    };
  },
  methods: {
    async resetPassword() {
      await this.$axios.get("/sanctum/csrf-cookie");
      try {
        const response = await this.$axios.post("/forgot-password", this.form);
        console.log(response.message);
        this.$toast.success(response.data.message);
      } catch (error) {
        const err_msg = error.response.data.errors.email;
        this.$toast.error(err_msg);
      }
    },
  },
};
</script>

<style>
</style>