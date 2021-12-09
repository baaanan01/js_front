<template>
<div class = "form">
  <h1>Login</h1>
  <form @submit.prevent="onFormSubmit" class="auth-form registration-form">
      <div class="form-field">
          <label for="login">Email</label>
          <input v-model="email" id = "login" type="text" placeholder="Enter your email" class= "input" required>
      </div>
      <div class="form-field">
      <label for="password">Password</label>
      <input v-model="password" id = "password" type="text" class= "input" placeholder="Enter your password" required>
      </div>
      <button class = "submit-btn" type="submit">Войти</button>
      <div class="action-link">
          <span>Нет аккаунта? </span>
          <a @click="redirect" class = "link-btn">Зарегистрироваться</a>
    </div>
  </form>
</div> 
</template>

<script>
import { doLogin } from "@/netClient/authService";

export default {
  name: "LoginPage",
data: () => ({
    email:'',
    password:'',
  }),
  async mounted() {},
  methods: {
    async onFormSubmit() {
      try {
        const token = await doLogin(
          this.email.trim(),
          this.password.trim(),
        );
        console.warn({token})
        if(token) {
                this.$router.push("/");
        }
      } catch (error) {
        console.error({error});
        }
      
    },
    redirect() {
      this.$router.push("/registration");
    },
    
  },
};
</script>
<style>
</style>