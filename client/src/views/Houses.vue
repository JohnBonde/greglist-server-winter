<template>
  <div class="houses container-fluid">
    <header class="row">
      <div class="col">
        <h1>Houses</h1>
      </div>
    </header>
    <main class="row search">
      <div class="col-12">
        <form @submit.prevent="createHouse">
          <input required type="number" v-model="newHouse.price" placeholder="price" />
          <input required type="number" v-model="newHouse.size" placeholder="size" />
          <input required type="number" v-model="newHouse.beds" placeholder="beds" />
          <input required type="number" v-model="newHouse.baths" placeholder="baths" />
          <input required type="text" v-model="newHouse.location" placeholder="location" />
          <input required type="text" v-model="newHouse.imgUrl" placeholder="imgUrl" />
          <button class="btn btn-success" type="submit">Add House</button>
        </form>
      </div>
      <div class="col-12">
        <div class="row houses">
          <div class="col-4" v-for="house in houses" :key="house.id">
            <!-- Props are data passed from parent to child with :propName="DATA" -->
            <house-component :houseData="house" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HouseComponent from "@/components/House";
export default {
  name: "houses",
  mounted() {
    this.$store.dispatch("getHouses");
  },
  data() {
    return {
      newHouse: {
        price: 0,
        size: 0,
        beds: 0,
        baths: 0,
        location: "",
        imgUrl: ""
      }
    };
  },
  methods: {
    createHouse() {
      let house = { ...this.newHouse };
      this.$store.dispatch("createHouse", house);
      this.newHouse = {
        price: 0,
        size: 0,
        beds: 0,
        baths: 0,
        location: "",
        imgUrl: ""
      };
    }
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    },
    unboughtHouses() {
      this.houses.filter(h => !house.bought);
    }
  },
  components: {
    HouseComponent
  }
};
</script>

<style>
</style>