<template>
  <div class="container-fluid d-flex justify-content-center align-items-center flex-column">
    <div class="row-mt-5">
      <div class="col-md-12">
        <h1 >Bienvenido a Contactify</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.container-fluid {
  background-image: url('../assets/img/05.jpg');
  min-height: 92.5vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 450px) {
  .container-fluid {
    min-height: 93.92vh;
  }
}

@media  screen and (max-width: 850px) {
    .container-fluid {
    min-height: 97vh;
  }
}

</style>
