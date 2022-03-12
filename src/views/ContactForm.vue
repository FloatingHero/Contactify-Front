<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <form
          @submit.prevent="storeContact"
          class="p-4"
          enctype="multipart/form-data"
        >
          <div class="mb-3 mt-3 d-flex justify-content-center">
            <div class="image_preview">
              <img
                :src="image_preview"
                :alt="image_preview"
                id="image_preview"
              />
            </div>
          </div>
          <div class="mb-3">
            <label
              for="profile_image"
              class="bg-dark text-white p-2 rounded-1 w-100 text-center profile_image"
              >Seleccione la foto de contacto
              <i class="ps-1 bi bi-card-image"></i
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
              v-model="contact.name"
            />
            <label for="name">Nombre</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="surname"
              placeholder="Smith"
              v-model="contact.surname"
            />
            <label for="surname">Apellidos</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="john@doe.com"
              v-model="contact.email"
            />
            <label for="email">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="tel"
              class="form-control"
              id="tel"
              placeholder="111111111"
              v-model="contact.tel"
            />
            <label for="tel">Teléfono</label>
          </div>
          <div class="d-flex justify-content-center mb-3">
            <button class="btn btn-outline-dark w-50">Registrarse</button>
          </div>
          <div
            class="alert alert-danger"
            v-if="Object.keys(errors).length !== 0"
          >
            <ul>
              <li v-for="(error, index) in errors" :key="index">
                {{ error.msg }}
              </li>
            </ul>
          </div>
          <div class="d-flex justify-content-center">
            <span
              >¿Ya tienes cuenta? Inicia sesión
              <router-link to="/login">aquí</router-link></span
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import contactsModule from '@/components/modules/contactsModule';
import userModule from '@/components/modules/userModule';
import { onMounted } from 'vue';
export default {
  setup() {
    const { contact, image_preview, setProfileImage, errors, storeContact } =
      contactsModule();
    const { userData } = userModule();

    onMounted(() => {
      if (image_preview.value === undefined) {
        document.getElementById('image_preview').style.height = '0';
        document.getElementById('image_preview').style.width = '0';
      }

      contact.value.user_id = userData.value.id;
    });

    return {
      setProfileImage,
      image_preview,
      contact,
      setProfileImage,
      errors,
      storeContact,
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
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
</style>
