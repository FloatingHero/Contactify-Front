<template>
  <div class="container">
    <Contact />
  </div>
</template>

<script>
import userModule from '@/components/modules/userModule';
import Contact from '@/components/Contact.vue';
export default {
  components: {
    Contact,
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
