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

<script setup>
import { ref, computed } from "vue";
import FilterTags from "../components/FilterTags.vue";
import JobLists from "../components/JobLists.vue";
import DUMMY_DATA from "../data.json";
import { jobFilter } from "../utils/jobFilter";

const jobs = ref(DUMMY_DATA);
const filteredJobs = ref([]);

function removeFilteredJobs(id) {
  filteredJobs.value = filteredJobs.value.filter(
    (filteredJob) => filteredJob !== id
  );
}

function addPositionToFilter(jobPosition) {
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
