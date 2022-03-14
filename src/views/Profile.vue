<template>
  <div>
    <UserInfo />
    <Contact />
  </div>
</template>

<script>
import userModule from '@/components/modules/userModule';
import Contact from '@/components/Contact.vue';
import UserInfo from '@/components/UserInfo.vue';
export default {
  components: {
    Contact,
    UserInfo,
  },
  setup() {
    const { userData } = userModule();

    const URL = `http://localhost:4000/img/${userData.value.profile_image}`;

    return {
      userData,
      URL,
    };
  },
};
</script>

<style></style>
