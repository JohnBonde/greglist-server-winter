import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "//localhost:3000/api"
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {},
    jobs: [],
    activeJob: {},
    houses: [],
    activeHouse: {}
  },
  mutations: {
    setAllCars(state, data) {
      state.cars = data;
    },
    addCar(state, car) {
      state.cars.push(car);
    },
    setActiveCar(state, car) {
      state.activeCar = car;
    },
    setAllJobs(state, data) {
      state.jobs = data
    },
    addJob(state, job) {
      state.jobs.push(job)
    },
    setActiveJob(state, job) {
      state.activeJob = job
    },
    setAllHouses(state, data) {
      state.houses = data
    },
    addHouse(state, house) {
      state.houses.push(house)
    },
    setActiveHouse(state, house) {
      state.activeHouse = house
    },
  },
  actions: {
    async getCars({ commit, dispatch }) {
      let res = await _api.get("cars");
      commit("setAllCars", res.data);
    },
    async getCarById({ commit, dispatch }, id) {
      let res = await _api.get("cars/" + id);
      commit("setActiveCar", res.data);
    },
    async createCar({ commit, dispatch }, car) {
      let res = await _api.post("cars", car);
      // dispatch("getAllCars"); //works but is a second call to the server
      commit("addCar", res.data);
    },
    async sold({ commit, dispatch }, id) {
      await _api.delete("cars/" + id);
      dispatch("getCars");
    },
    async getJobs({ commit, dispatch }) {
      let res = await _api.get("jobs");
      commit("setAllJobs", res.data)
    },
    async getJobById({ commit, dispatch }, id) {
      let res = await _api.get("jobs/" + id);
      commit("setActiveJob", res.data);
    },
    async createJob({ commit, dispatch }, job) {
      let res = await _api.post("jobs", job);
      // dispatch("getAllCars"); //works but is a second call to the server
      commit("addJob", res.data);
    },
    async applied({ commit, dispatch }, id) {
      await _api.delete("jobs/" + id);
      dispatch("getJobs")
    },
    async getHouses({ commit, dispatch }) {
      let res = await _api.get("houses");
      commit("setAllHouses", res.data)
    },
    async getHouseById({ commit, dispatch }, id) {
      let res = await _api.get("houses/" + id);
      commit("setActiveHouse", res.data);
    },
    async createHouse({ commit, dispatch }, house) {
      let res = await _api.post("houses", house);
      // dispatch("getAllCars"); //works but is a second call to the server
      commit("addHouse", res.data);
    },
    async bought({ commit, dispatch }, id) {
      await _api.delete("houses/" + id);
      dispatch("getHouses")
    }
  }
});
