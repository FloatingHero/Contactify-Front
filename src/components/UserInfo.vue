<template>
  <div class="container">
    <div class="row mt-4 user_card">
      <div class="col-sm-12 col-md-3 user_data">
        <img
          :src="URL + userData.profile_image"
          :alt="userData.profile_image"
        />
      </div>
      <div class="col-sm-12 col-lg-9">
        <div class="row p-2">
          <div class="col-sm-12 user_data align-items-center">
            {{ userData.name }}
          </div>
        </div>
        <div class="row p-2">
          <div class="col-sm-12 user_data align-items-center">
            {{ userData.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userModule from './modules/userModule';
export default {
  setup() {
    const { userData } = userModule();
    const URL = `http://localhost:4000/img/`;

    return {
      userData,
      URL,
    };
  },
};
</script>

<style scoped>
img {
  height: 250px;
  width: 250px;
  border-radius: 50%;
}

.user_card {
  box-shadow: 2em 1em 10px #14e1;
}

.user_data {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 390px) and (max-width: 769px) {
  .user_data {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

@media (min-width: 770px) and (max-width: 992px) {
  .user_card:first-child {
    display: flex;
    justify-content: center;
  }
}
</style>
