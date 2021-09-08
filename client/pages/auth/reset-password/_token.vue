<template>
  <div class="container mx-auto p-4">
    <form @submit.prevent="resetPassword()">
      <div class="mb-2">
        <label for="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="form.email"
          readonly
          class="border-2"
        />
      </div>
      <div class="mb-2">
        <label for="password">New Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="form.password"
          class="border-2"
        />
      </div>
      <div class="mb-2">
        <label for="password_confirmation">Confirm New Password:</label>
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          v-model="form.password_confirmation"
          class="border-2"
        />
      </div>
      <div class="mb-2">
        <input type="hidden" name="token" v-model="form.token" />
        <button
          type="submit"
          class="
            px-3
            py-2
            bg-green-400
            hover:bg-green-500
            text-white
            transition-colors
          "
        >
          Reset Password
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    form() {
      return {
        email: this.$route.query.email,
        password: null,
        password_confirmation: null,
        token: this.$route.params.token,
      };
    },
  },
  methods: {
    async resetPassword() {
      try {
        const response = await this.$axios.post("/reset-password", this.form);
        this.$toast.success("Password reset successfully!");
        this.$router.push({ name: "auth-login" });
      } catch (error) {
        this.$toast.error(error.response.data.message);
      }
    },
  },
};
</script>

<style>
</style>