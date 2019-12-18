<template>
  <div class="job" :class="{ greyscale: jobData.applied }">
    <router-link :to="{name: 'jobDetails', params: {id: jobData.id}}">
      <p>{{jobMakeUpperCase}} | {{jobData.company}}</p>
    </router-link>
    <button @click="applied">APPLY</button>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: ["jobData"],
  computed: {
    jobMakeUpperCase() {
      return this.jobData.title.toUpperCase();
    }
  },
  methods: {
    applied() {
      this.$store.dispatch("applied", this.jobData.id);
    }
  }
};
</script>

<style>
.greyscale {
  filter: grayscale(1);
}
</style>