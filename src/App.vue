<template>
  <Nav />
  <Transition name="fade">
    <router-view />
  </Transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
