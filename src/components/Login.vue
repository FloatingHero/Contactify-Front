<template>
  <form @submit.prevent="login" class="p-4">
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="email"
        placeholder="johndoe@gmail.com"
        v-model="user.email"
      />
      <label for="email">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="********"
        v-model="user.password"
      />
      <label for="password">Contraseña</label>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <button class="btn btn-outline-dark w-50">Iniciar sesión</button>
    </div>
    <div class="d-flex justify-content-center">
      <span
        >¿No tienes cuenta? Regístrate
        <router-link to="/registro">aquí</router-link></span
      >
    </div>
  </form>
</template>

<script>
import userModule from './modules/userModule';
export default {
  setup() {
    const { user, login } = userModule();

    return {
      user,
      login,
    };
  },
};
</script>

<style></style>
