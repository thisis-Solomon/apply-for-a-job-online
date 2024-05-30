<template>
  <div class="relative container p-2 mx-auto w-[80%]">
    <FilterTags
      :filters="filteredJobs"
      @remove-filter="removeFilteredJobs"
      @clear-filters="clearFilteredJobs"
    />
    <section v-for="job in filteredJobsList" :key="job.id">
      <JobLists :job="job" @add-to-filter="addPositionToFilter" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import FilterTags from "../components/FilterTags.vue";
import JobLists from "../components/JobLists.vue";
import DUMMY_DATA from "../data.json";
import { jobFilter } from "../utils/jobFilter";
import { JobsT } from "../types/types";

const jobs = ref<JobsT[]>(DUMMY_DATA);
const filteredJobs = ref<string[]>([]);  // Ensure this is an array of strings

function removeFilteredJobs(filter: string) {  // Updated to accept a string
  filteredJobs.value = filteredJobs.value.filter(
    (jobPosition: string) => jobPosition !== filter
  );
}

function addPositionToFilter(jobPosition: string) {
  if (
    !filteredJobs.value.includes(jobPosition) &&
    filteredJobs.value.length < 5
  ) {
    filteredJobs.value.push(jobPosition);
  }
}

function clearFilteredJobs() {
  filteredJobs.value = [];
}

const filteredJobsList = computed(() =>
  jobFilter(jobs.value, filteredJobs.value)
);
</script>
