<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit" :disabled="loading">Login</button>
        <p v-if="error">{{ error }}</p>
      </form>
    </div>
    <div v-if="loading" class="loading-spinner">Loading...</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        loading: false,
        error: ''
      };
    },
    methods: {
      async login() {
        this.loading = true;
        this.error = '';
        try {
          const response = await axios.post('http://localhost:8080/login', {
            username: this.username,
            password: this.password
          });
          if (response.data.authenticated) {
            this.$router.push('/dashboard');
          } else {
            this.error = 'Invalid credentials, please try again.';
          }
        } catch (err) {
          this.error = 'Login failed. Please check your credentials or try again later.';
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .loading-spinner {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}
p.error {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}
  </style>
  