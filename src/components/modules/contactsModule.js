import { ref } from 'vue';
import axios from '../../lib/axios';
import { useRouter } from 'vue-router';

export default function contactsModule() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const contacts = ref({});
  const errors = ref('');
  const router = useRouter();
  const contact = ref({});
  const image_preview = ref();

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
      //todo show toast notification with response.data
      if (
        contact.value.image_name !== undefined ||
        contact.value.image_name.length !== 0
      ) {
        uploadImage();
      }
    } catch (err) {
      console.log(err.response.data);
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
  };
}
