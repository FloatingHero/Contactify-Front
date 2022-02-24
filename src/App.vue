<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from '@/components/Nav';
export default {
  components: {
    Nav,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
