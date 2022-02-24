import { ref } from 'vue';
import axios from '../../lib/axios';
import { useToast } from 'vue-toastification';

const userData = ref({});

export default function userModule() {
  const user = ref({});
  const toast = useToast();
  const image_preview = ref();

  function setProfileImage(e) {
    user.value.profile_image_name = `${Date.now()} - ${e.target.files[0].name}`;
    user.value.profile_image_file = e.target.files[0];
    image_preview.value = URL.createObjectURL(e.target.files[0]);
  }

  async function register() {
    console.log(user.value);
    const res = await axios.post(`/api/register`, user.value);
    await axios.post(`/api/upload`, user.value.profile_image_file);
    console.log(user.value);
    toast.success(res.data);
  }

  async function login() {
    const res = await axios.post(`/api/login`, user.value);
    if (res.data !== undefined || res.data !== null) {
      localStorage.setItem('auth_token', res.data);
      const user_token = await axios.get(`/api/user`, {
        headers: {
          Authorization: `Bearer ${res.data}`,
        },
      });

      if (user_token.data !== undefined || user_token.data !== null) {
        localStorage.setItem('user', JSON.stringify(user_token.data.user));
        userData.value = user_token.data.user;
      }
    }
  }

  function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('auth_token');
  }

  return {
    user,
    register,
    setProfileImage,
    image_preview,
    login,
    userData,
    logout,
  };
}
