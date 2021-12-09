<template>
<div class="form">
  <h1>Registration</h1>
 <form @submit.prevent= "onFormSubmit" class = "registration-form auth-form">
      <div class="form-field">
          <label for="email">Email</label>
          <input v-model="email" id = "email" type="text" placeholder="Enter your email" class= "input" required>
      </div>
      <div class="form-field">
          <label for="login">Login</label>
          <input v-model="login" id = "login" type="text" placeholder="Enter your login" class= "input" required>
      </div>
      <div class="form-field">
      <label for="password">Password</label>
      <input v-model="password" id = "password" type="text" class= "input" placeholder="Enter your password" required>
      </div>
      <button class = "submit-btn" type="submit">Регистрация</button>
      <div class="action-link">
          <span>Есть аккаунт? </span>
          <a @click="redirect" class = "link-btn">Войти</a>
    </div>
  </form>
</div>
</template>

<script>
import { doRegister } from "@/netClient/authService";

export default {
  name: "RegistrationPage",
  data: () => ({
    email: "",
    login: '',
    password: "",
  }),
  async mounted() {},
  methods: {
    redirect() {
      this.$router.push("/login");
    },
    async onFormSubmit() {
      try {
        const data = await doRegister(this.email.trim(), this.password.trim());
        console.warn(data)
      } catch (error) {
        console.error({ error });
        throw error;
      }
      this.$router.push("/login");
    },
  },
};
</script>
<style>
.password{
border-style: 1px solid #ccc;
}
</style>