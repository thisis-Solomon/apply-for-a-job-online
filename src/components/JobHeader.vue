<template>
  <div class="flex gap-x-5 items-center">
    <div
      class="h-20 w-20 rounded-md flex items-center justify-center bg-gray-200 text-desaturated-dark-cyan text-3xl font-bold"
      v-if="!job?.company_logo"
    >
      {{ fallbackInitial }}
    </div>
    <img
      v-else
      :src="job.company_logo"
      :alt="job.company"
      class="h-20 rounded-md max-w-20"
    />
    <div class="flex flex-col gap-y-0.5">
      <h1 class="font-bold text-lg text-desaturated-dark-cyan">
        {{ job?.company }}
        <span
          v-if="isNewJob"
          class="bg-desaturated-dark-cyan font-semibold text-sm text-light-rayish-cyan--background px-2 py-1 rounded-full uppercase ml-5"
        >
          New!
        </span>
        <span
          v-if="job?.featured"
          class="bg-very-dark-grayish-cyan font-semibold text-sm text-light-rayish-cyan--background px-2 py-1 rounded-full uppercase ml-2"
        >
          Featured
        </span>
      </h1>
      <h2
        class="font-bold text-lg hover:text-desaturated-dark-cyan cursor-pointer"
      >
        <RouterLink :to="{ name: 'JobDetails', params: { id: job?.id } }">
          {{ job?.position }}
        </RouterLink>
      </h2>
      <ul class="flex gap-2 text-dark-grayish-cyan items-center">
        <li>{{ postedTimeAgo }}</li>
        <span class="w-1 h-1 bg-dark-grayish-cyan rounded-full"></span>
        <li>{{ job?.contract }}</li>
        <span class="w-1 h-1 bg-dark-grayish-cyan rounded-full"></span>
        <li>{{ job?.location }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import { RouterLink } from "vue-router";
import { Timestamp } from "firebase/firestore";
import { formatTimeAgo, isNew } from "../utils/timeUtils";

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const fallbackInitial = computed(() => {
  return props.job?.company ? props.job.company.charAt(0).toUpperCase() : "";
});

const isNewJob = computed(() => {
  if (!props.job?.createdAt) return false;
  return isNew(props.job.createdAt as Timestamp);
});

const postedTimeAgo = computed(() => {
  if (!props.job?.createdAt) return "";
  return formatTimeAgo(props.job.createdAt as Timestamp);
});
</script>

<style scoped>
.bg-gray-200 {
  background-color: #e2e8f0;
}
</style>
