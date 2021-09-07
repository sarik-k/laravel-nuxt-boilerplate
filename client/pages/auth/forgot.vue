<template>
  <div class="container mx-auto py-4 max-w-screen-xl">
    <div class="">
      <h1 class="text-xl font-bold">Reset Password</h1>
      <p>
        Reset your password by filling in your username or e-mail address. You
        will then receive an email with a link that will let you enter a new
        password.
      </p>
      <form>
        <div>
          <label for="email">Enter your email address: </label>
          <input type="email" name="email" class="border-2" />
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
export default {};
</script>

<style>
</style>