<template>
  <div class="house" :class="{greyscale: houseData.bought}">
    <router-link :to="{name: 'houseDetails', params: {id: houseData.id}}">
      <img :src="houseData.imgUrl" alt />
      <p>${{houseData.price}} | {{houseData.location}}</p>
    </router-link>
    <button v-if="!houseData.bought" @click="bought">BUY</button>
  </div>
</template>

<script>
export default {
  name: "House",
  props: ["houseData"],
  methods: {
    bought() {
      this.$store.dispatch("bought", this.houseData.id);
    }
  }
};
</script>

<style>
img {
  max-width: 100%;
}
.greyscale {
  filter: grayscale(1);
}
</style>