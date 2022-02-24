<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Contactify</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar_list"
        aria-controls="navbar_list"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar_list">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Contactos</router-link>
          </li>
        </ul>
        <ul
          class="navbar-nav ms-auto"
          v-if="Object.keys(userData).length === 0"
        >
          <li class="nav-item">
            <router-link to="/registro" class="nav-link">Registro</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link"
              >Inicio de sesión</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto" v-else>
          <li class="nav-item text-white">
            {{ userData.name }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import userModule from './modules/userModule';
import { onMounted } from 'vue';
export default {
  name: 'Nav',
  setup() {
    const { userData } = userModule();

    onMounted(() => {
      if (localStorage.getItem('user') !== null) {
        userData.value = JSON.parse(localStorage.getItem('user'));
      }
    });

    return {
      userData,
    };
  },
};
</script>

<style></style>
