<template>
  <form @submit.prevent="register" class="p-4" enctype="multipart/form-data">
    <div class="mb-3 mt-3 d-flex justify-content-center">
      <div class="image_preview">
        <img :src="image_preview" :alt="image_preview" />
      </div>
    </div>
    <div class="mb-3">
      <label
        for="profile_image"
        class="bg-dark text-white p-2 rounded-1 w-100 text-center profile_image"
        >Seleccione su foto de perfil <i class="ps-1 bi bi-card-image"></i
      ></label>
      <input
        type="file"
        class="form-control d-none"
        id="profile_image"
        placeholder="Adjunte su foto de perfil"
        @change="setProfileImage"
      />
    </div>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="John Doe"
        v-model="user.name"
      />
      <label for="name">Nombre</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="john@doe.com"
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
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control"
        id="confirm_password"
        placeholder="********"
      />
      <label for="confirm_password">Confirme su contraseña</label>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <button class="btn btn-outline-dark w-50">Registrarse</button>
    </div>
    <div class="d-flex justify-content-center">
      <span
        >¿Ya tienes cuenta? Inicia sesión
        <router-link to="/login">aquí</router-link></span
      >
    </div>
  </form>
</template>

<script>
import userModule from './modules/userModule';
export default {
  setup() {
    const { user, register, setProfileImage, image_preview } = userModule();

    return {
      user,
      register,
      setProfileImage,
      image_preview,
    };
  },
};
</script>

<style scoped>
.profile_image {
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #1a1e21 !important;
}

.profile_image:hover {
  background-color: #fff !important;
  color: #1a1e21 !important;
}

.image_preview {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: 2px 3.5px 4px #1a1e21;
}

.image_preview img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}
</style>
