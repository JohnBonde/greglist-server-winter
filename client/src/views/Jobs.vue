<template>
  <div class="jobs container-fluid">
    <header class="row">
      <div class="col">
        <h1>Jobs</h1>
      </div>
    </header>
    <main class="row search">
      <div class="col-12">
        <form @submit.prevent="createJob">
          <input required type="text" v-model="newJob.title" placeholder="title" />
          <input required type="text" v-model="newJob.company" placeholder="company" />
          <input required type="text" v-model="newJob.location" placeholder="location" />
          <input required type="text" v-model="newJob.description" placeholder="description" />
          <input required type="number" v-model="newJob.pay" placeholder="pay" />
          <input required type="text" v-model="newJob.requirements" placeholder="requirements" />
          <button class="btn btn-success" type="submit">Add Job</button>
        </form>
      </div>
      <div class="col-12">
        <div class="row jobs">
          <div class="col-4" v-for="job in jobs" :key="job.id">
            <!-- Props are data passed from parent to child with :propName="DATA" -->
            <job-component :jobData="job" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import JobComponent from "@/components/Job";
export default {
  name: "jobs",
  mounted() {
    this.$store.dispatch("getJobs");
  },
  data() {
    return {
      newJob: {
        title: "",
        company: "",
        location: "",
        description: "",
        pay: 0,
        requirements: ""
      }
    };
  },
  methods: {
    createJob() {
      let job = { ...this.newJob };
      this.$store.dispatch("createJob", job);
      this.newJob = {
        title: "",
        company: "",
        location: "",
        description: "",
        pay: 0,
        requirements: ""
      };
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    },
    boughtCars() {
      this.jobs.filter(j => !job.applied);
    }
  },
  components: {
    JobComponent
  }
};
</script>

<style></style>
