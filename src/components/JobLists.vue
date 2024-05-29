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

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import JobHeader from "./JobHeader.vue";
import JobTag from "./JobTag.vue";
import Card from "./shared/Card.vue";

type JobIF = {
  role: string;
  level: string;
  languages: string[];
};

const props = defineProps<{ job: JobIF }>();
const job = props.job;

const emits = defineEmits<{ (e: "add-to-filter", filter: string): void }>();

function addToFilter(filter: string) {
  emits("add-to-filter", filter);
}
</script>
