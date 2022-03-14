<template>
  <div class="container-sm container">
    <div class="row">
      <div class="col-sm-12 mt-4 ms-5">
        <router-link to="/registrar-contacto" class="btn btn-outline-primary"
          >Añadir contacto</router-link
        >
      </div>
    </div>
    <div class="row" v-if="Object.keys(errors).length === 0">
      <div
        class="col-sm-12 col-md-4  d-flex justify-content-center mt-2"
        v-for="(contact, index) in contacts"
        :key="index"
      >
        <div class="card">
          <img
            :src="URL + contact.image"
            :alt="contact.image"
            class="card-img-top"
          />
          <div class="card-body">
            <h4 class="card-title">{{ contact.name }} {{ contact.surname }}</h4>
            <p class="card-text">
              <span class="text-black-50">Email: </span> {{ contact.email }}
            </p>
            <p class="card-text">
              <span class="text-black-50">Teléfono: </span> {{ contact.tel }}
            </p>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <form
              @submit.prevent="deleteContact(contact.name, contact.id, index)"
            >
              <button class="btn btn-outline-danger btn-sm me-2">
                <i class="bi bi-trash"></i>
              </button>
            </form>

            <router-link
              :to="{ name: 'EditContact', params: { contact_id: contact.id } }"
              class="btn btn-outline-secondary btn-sm"
            >
              <i class="bi bi-pencil-square"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-md-12">
        {{ errors }}
      </div>
    </div>
  </div>
</template>

<script>
import contactsModule from '@/components/modules/contactsModule';
import { onMounted } from 'vue';
export default {
  setup() {
    const { getContacts, contacts, errors, deleteContact } = contactsModule();
    const URL = 'http://localhost:4000/img/';

    onMounted(() => {
      getContacts();
    });

    return {
      contacts,
      errors,
      URL,
      deleteContact,
    };
  },
};
</script>

<style scoped>
.card {
  width: 70%;
}

img {
  height: 300px;
  width: 100%;
}
</style>
