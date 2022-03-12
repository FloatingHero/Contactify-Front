<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 p-4 ms-auto">
        <router-link to="/registrar-contacto" class="btn btn-outline-primary"
          >Añadir contacto</router-link
        >
      </div>
    </div>
    <div class="row" v-if="Object.keys(errors).length === 0">
      <div class="col-md-4" v-for="(contact, index) in contacts" :key="index">
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
    const { getContacts, contacts, errors } = contactsModule();
    const URL = 'http://localhost:4000/img/';

    onMounted(() => {
      getContacts();
    });

    return {
      contacts,
      errors,
      URL,
    };
  },
};
</script>

<style scoped>

.card {
  width: 18rem;
}

img {
  height: 300px;
  width: 100%;
}
</style>
