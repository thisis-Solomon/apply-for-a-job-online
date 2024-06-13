<template>
  <div class="relative container p-2 mx-auto w-[80%]">
    <Card v-if="job" :job="job">
      <JobHeader :job="job" />
      <div
        class="flex text-sm gap-x-5 text-desaturated-dark-cyan font-semibold"
      >
        <JobTag
          v-for="tag in [job.role, job.level, ...job.languages]"
          :key="tag"
          :tag="tag"
        />
      </div>
    </Card>

    <Card v-if="job" :job="job" class="flex-col">
      <article class="whitespace-pre-wrap mb-10">
        {{ job.jobDescription }}
      </article>
      <button class="bg-sky-500 py-3 px-8 rounded-md text-lg font-semibold">
        Apply
      </button>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import JobHeader from "../components/JobHeader.vue";
import JobTag from "../components/JobTag.vue";
import Card from "../components/shared/Card.vue";
import { readMoreDetailsAboutAJobPost } from "../controllers/data";
import { JobPost } from "../types/types";

const route = useRoute();
const id = ref(route.params.id as string);
const job = ref<JobPost | null>(null);

onMounted(async () => {
  job.value = await readMoreDetailsAboutAJobPost(id.value);
});
</script>
