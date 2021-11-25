<template>
<div class = "form">
  <h1>Войти в систему</h1>
  <form @submit.prevent="onFormSubmit">
      <div class="form-field">
          <label for="login">Login</label>
          <input id = "login" type="text" placeholder="Enter your login" class= "input" required>
      </div>
      <div class="form-field">
      <label for="password">Password</label>
      <input id = "password" type="text" class= "input" placeholder="Enter your password" required>
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
export default {
  name: "LoginPage",
    methods:{
      onFormSubmit(){
        this.$router.push('/')
      },
      redirect(){
            this.$router.push('/registration')
      }
    }
};
</script>
<style>
</style>