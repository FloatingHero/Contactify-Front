import { ref } from 'vue';
import axios from '../../lib/axios';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const userData = ref({});

export default function userModule() {
  const user = ref({});
  const toast = useToast();
  const image_preview = ref();
  const errors = ref({});
  const router = useRouter();

  function setProfileImage(e) {
    user.value.image_name = `${e.target.files[0].name}`;
    user.value.image_file = e.target.files[0];
    image_preview.value = URL.createObjectURL(e.target.files[0]);
    document.getElementById('image_preview').style.height = '150px';
    document.getElementById('image_preview').style.width = '150px';
  }

  async function uploadImage() {
    const fd = new FormData();
    fd.append('image', user.value.image_file);
    await axios.post(`/api/upload`, fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  function register() {
    if (
      user.value.image_name !== undefined &&
      user.value.image_name.length !== 0
    ) {
      uploadImage();
    }
    axios
      .post(`/api/register`, user.value)
      .then((res) => {
        toast.success(res.data);
        router.push('/login');
      })
      .catch((err) => {
        errors.value = err.response.data.errors;
      });
  }

  function login() {
    axios
      .post(`/api/login`, user.value)
      .then(async (res) => {
        if (res.data !== undefined || res.data !== null) {
          localStorage.setItem('auth_token', res.data);
          const user_token = await axios.get(`/api/user`, {
            headers: {
              Authorization: `Bearer ${res.data}`,
            },
          });

          if (user_token.data !== undefined || user_token.data !== null) {
            localStorage.setItem(
              'userData',
              JSON.stringify(user_token.data.user)
            );
            userData.value = user_token.data.user;
          }

          router.push('/perfil');
        }
      })
      .catch((err) => {
        errors.value = err.response.data.errors;
      });
  }

  function logout() {
    localStorage.removeItem('userData');
    localStorage.removeItem('auth_token');
    router.push('/');
  }

  return {
    user,
    register,
    setProfileImage,
    image_preview,
    login,
    userData,
    logout,
    errors,
  };
}
