<template>
  <div>
    <form @submit.prevent="register()">
      <div class="form-group">
        <label for="name"> Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          class="border"
          v-model="form.name"
        />
      </div>

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
        <label for="password_confirmation">Confirm Password: </label>
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          class="border"
          v-model="form.password_confirmation"
        />
      </div>

      <div class="form-group">
        <label for="accept_terms">
          <input
            type="checkbox"
            name="accept_terms"
            id="accept_terms"
            v-model="form.accept_terms"
          />
          I accept the terms and conditions
        </label>
      </div>

      <div class="form-group">
        <button type="submit" class="px-3 py-2 bg-green-500">Register</button>
      </div>

      <div v-for="(error, key) in errors" :key="key">
        <ul>
          <li v-for="(err, k) in error" :key="k">{{ err }}</li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  auth: "guest",
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        accept_terms: false,
      },
      errors: [],
    };
  },

  methods: {
    async register() {
      await this.$axios.get("/sanctum/csrf-cookie");
      try {
        await this.$axios.post("/register", this.form);
        this.login();
      } catch (error) {
        this.errors = error.response.data.errors;
        return;
      }
    },

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