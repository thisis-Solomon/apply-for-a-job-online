<template>
  <Card :job="job">
    <JobHeader :job="job" />
    <div class="flex text-sm gap-x-5 text-desaturated-dark-cyan font-semibold">
      <JobTag
        v-for="tag in [job.role, job.level, ...job.languages]"
        :key="tag"
        :tag="tag"
        @click="addToFilter"
      />
    </div>
  </Card>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import JobHeader from "./JobHeader.vue";
import JobTag from "./JobTag.vue";
import Card from "./shared/Card.vue";

const props = defineProps({
  job: Object,
});

const emits = defineEmits(["add-to-filter"]);

function addToFilter(filter) {
  emits("add-to-filter", filter);
}
</script>
