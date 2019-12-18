<template>
  <div class="house-details container-fluid">
    <header class="row">
      <div class="col">
        <router-link>
          <h1>House Details</h1>
        </router-link>
      </div>
    </header>
    <main class="row">
      <div class="col-12">
        <img :src="house.imgUrl" alt />
        <p>Price: ${{house.price}}</p>
        <p>House Size: {{house.size}} SqFt</p>
        <p>Bedrooms: {{house.beds}}</p>
        <p>Bathrooms: {{house.baths}}</p>
        <p>Location: {{house.location}}</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HouseDetails",
  mounted() {
    this.$store.dispatch("getHouseById", this.$route.params.id);
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    }
  }
};
</script>

<style>
</style>