<template>
  <div class="car-details container-fluid">
    <header class="row">
      <div class="col">
        <router-link :to="{ name: 'home' }">
          <h1>
            C
            <img alt="Vue logo" src="../assets/logo.png" />rs
          </h1>
        </router-link>
      </div>
    </header>
    <main class="row">
      <div class="col-12">
        <img :src="car.imgUrl" alt />
        <p>Make: {{car.make}}</p>
        <p>Model: {{car.model}}</p>
        <p>Price: ${{car.price}}</p>
        <p>Year: {{car.year}}</p>
        <p>Description: {{car.description}}</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "CarDetails",
  mounted() {
    this.$store.dispatch("getCarById", this.$route.params.id);
  },
  computed: {
    car() {
      return this.$store.state.activeCar;
    }
  }
};
</script>

<style></style>
