<template>
  <div class="form-block">
    <h3>Sign In</h3>
    <div class="form-card">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          placeholder="password"
          class="form-control"
          v-model="password"
        />
      </div>
    </div>
    <button class="btn btn-success mt-3 w-100" @click="signIn">Sign In</button>
    <p>{{ error.message }}</p>
    <br />
    <router-link to="/signup">Already a user? Sign Up</router-link>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(err => (this.error = err));
    }
  }
};
</script>
