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
import { ref, computed, onMounted } from "vue";
import FilterTags from "../components/FilterTags.vue";
import JobLists from "../components/JobLists.vue";
import DUMMY_DATA from "../data.json";
import { jobFilter } from "../utils/jobFilter";
import { JobsT } from "../types/types";
import { getAllJobPosts } from "../controllers/data";

const jobs = ref<JobsT[]>([]);
const filteredJobs = ref<string[]>([]);

// Fetch jobs data on component mount
onMounted(async () => {
  try {
    const jobPosts = await getAllJobPosts();
    jobs.value = jobPosts.length ? jobPosts : DUMMY_DATA;
    console.log(jobs);
  } catch (error) {
    console.error("Error fetching job posts:", error);
    jobs.value = DUMMY_DATA; // Fallback to dummy data in case of an error
  }
});

// Computed property to filter jobs based on selected filters
const filteredJobsList = computed(() =>
  jobFilter(jobs.value, filteredJobs.value)
);

// Function to remove a filter
function removeFilteredJobs(filter: string) {
  filteredJobs.value = filteredJobs.value.filter(
    (jobPosition) => jobPosition !== filter
  );
}

// Function to add a filter
function addPositionToFilter(jobPosition: string) {
  if (
    !filteredJobs.value.includes(jobPosition) &&
    filteredJobs.value.length < 5
  ) {
    filteredJobs.value.push(jobPosition);
  }
}

// Function to clear all filters
function clearFilteredJobs() {
  filteredJobs.value = [];
}
</script>
