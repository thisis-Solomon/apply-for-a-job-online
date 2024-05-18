<template>
  <section
    :class="{ 'border-l-4 border-desaturated-dark-cyan': job.featured }"
    class="flex justify-between items-center bg-white rounded-md px-10 py-5 shadow-lg shadow-dark-grayish-cyan/10 my-5"
  >
    <JobHeader :job="job" />
    <div class="flex text-sm gap-x-5 text-desaturated-dark-cyan font-semibold">
      <JobTag
        v-for="tag in [job.role, job.level, ...job.languages]"
        :key="tag"
        :tag="tag"
        @click="addToFilter"
      />
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import JobHeader from "./JobHeader.vue";
import JobTag from "./JobTag.vue";

const props = defineProps({
  job: Object,
});

const emits = defineEmits(["add-to-filter"]);

function addToFilter(filter) {
  emits("add-to-filter", filter);
}
</script>
