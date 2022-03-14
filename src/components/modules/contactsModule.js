import { ref } from 'vue';
import axios from '../../lib/axios';
import { useRouter, useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';
import Swal from 'sweetalert2';

export default function contactsModule() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const contacts = ref([]);
  const errors = ref('');
  const router = useRouter();
  const contact = ref({});
  const image_preview = ref();
  const toast = useToast();
  const route = useRoute();

  function setProfileImage(e) {
    contact.value.image_name = `${e.target.files[0].name}`;
    contact.value.image = e.target.files[0];
    image_preview.value = URL.createObjectURL(e.target.files[0]);
    document.getElementById('image_preview').style.height = '150px';
    document.getElementById('image_preview').style.width = '150px';
  }

  async function getContacts() {
    try {
      const response = await axios.get(`/api/contacts/${userData.id}`);
      contacts.value = response.data;
    } catch (err) {
      errors.value = err.response.data;
    }
  }

  async function uploadImage() {
    const fd = new FormData();
    fd.append('image', contact.value.image);
    await axios.post(`/api/upload`, fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async function storeContact() {
    try {
      const response = await axios.post('/api/contact/store', contact.value);
      router.push('/perfil');
      toast.success(response.data);
      if (
        contact.value.image_name !== undefined ||
        contact.value.image_name.length !== 0
      ) {
        uploadImage();
      }
    } catch (err) {
      console.log(err.response.data);
      errors.value = err.response.data;
    }
  }

  function deleteContact(contact_name, contact_id, index) {
    Swal.fire({
      title: `¡Se eliminará el contacto ${contact_name}!`,
      text: 'Esta acción no se podrá revertir. ¿Está seguro de que desea continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy segur@',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post(
            `/api/contact/delete/${contact_id}`
          );
          contacts.value.splice(index, 1);
          toast.success(response.data);
        } catch (err) {
          console.log(err.response.data);
        }
      }
    });
  }

  async function getContact(contact_id) {
    try {
      const response = await axios.get(`/api/contact/${contact_id}`);
      contact.value = response.data;
      image_preview.value = 'http://localhost:4000/img/' + contact.value.image;
    } catch (err) {
      console.log(err.repsonse.data);
    }
  }

  async function editContact() {
    try {
      const response = await axios.post(`/api/contact/edit/`, contact.value);
      const res = await axios.get(`/api/contact/${contact.value.id}`);

      if (
        res.data.image !== contact.value.image ||
        res.data.image === null ||
        (res.data.image === undefined && contact.value.image !== null) ||
        contact.value.image !== undefined
      ) {
        uploadImage();
      }

      router.push('/perfil');
      toast.success(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  function handleSubmit() {
    if (Object.keys(route.params).length !== 0) {
      editContact();
    } else {
      storeContact();
    }
  }

  return {
    getContacts,
    contacts,
    errors,
    router,
    contact,
    image_preview,
    setProfileImage,
    storeContact,
    deleteContact,
    getContact,
    editContact,
    handleSubmit,
  };
}
