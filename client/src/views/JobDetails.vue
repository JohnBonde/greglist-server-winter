<template>
  <div class="job-details container-fluid">
    <header class="row">
      <div class="col">
        <router-link :to="{name: 'jobs'}">
          <h1>Job Details</h1>
        </router-link>
      </div>
    </header>
    <main class="row">
      <div class="col-12">
        <p>Title: {{job.title}}</p>
        <p>Company: {{job.company}}</p>
        <p>Location: {{job.location}}</p>
        <p>Description: {{job.description}}</p>
        <p>Salary: {{job.pay}}</p>
        <p>Requirements: {{job.requirements}}</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  mounted() {
    this.$store.dispatch("getJobById", this.$route.params.id);
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
    }
  }
};
</script>

<style>
</style>