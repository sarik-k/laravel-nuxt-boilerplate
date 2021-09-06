<template>
  <div>
    <form @submit.prevent="login()">
      <div class="form-group">
        <label for="email"> Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          class="border"
          v-model="form.email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          class="border"
          v-model="form.password"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="px-3 py-2 bg-green-500">Login</button>
      </div>
    </form>
    <div v-for="(error, key) in errors" :key="key">
      <ul>
        <li v-for="(err, k) in error" :key="k">{{ err }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  data() {
    return {
      form: {
        email: "sarik.codewing@gmail.com",
        password: "password",
      },
      errors: [],
    };
  },
  methods: {
    login() {
      this.$auth
        .loginWith("laravelSanctum", {
          data: this.form,
        })
        .then(() => this.$toast.success("Logged In!"))
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.$toast.error("Something went wrong...");
        });
    },
  },
};
</script>

<style>
</style>