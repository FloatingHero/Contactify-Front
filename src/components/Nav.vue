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
          <li class="nav-item dropdown">
            <img
              :src="URL + userData.profile_image"
              :alt="userData.profile_image"
              v-if="userData.profile !== null || userData.profile !== undefined"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            />
            <a
              href="javascript:void(0)"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              v-else
              >{{ userData.name }}</a
            >
            <ul class="dropdown-menu dropdown-menu-dark">
              <li class="dropdown-item">
                <router-link to="/perfil" class="nav-link">Perfil</router-link>
              </li>
              <li class="dropdown-item">
                <form @submit="logout" class="d-inline">
                  <button class="nav-link button_link">Cerrar sesión</button>
                </form>
              </li>
            </ul>
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
    const { userData, logout } = userModule();

    onMounted(() => {
      if (localStorage.getItem('userData') !== null) {
        userData.value = JSON.parse(localStorage.getItem('userData'));
      }
    });

    const URL = `http://localhost:4000/img/`;

    return {
      userData,
      URL,
      logout,
    };
  },
};
</script>

<style scoped>
img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 2.5rem;
}

.dropdown-menu {
  min-width: 0;
}
.dropdown-menu .dropdown-item {
  white-space: normal;
}

.button_link {
  background-color: transparent;
  border: none;
}
</style>
