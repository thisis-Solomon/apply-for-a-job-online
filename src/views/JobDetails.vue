<template>
  <div v-if="!isLoading" class="relative container p-2 mx-auto w-[80%]">
    <buttton
      class="bg-red-400 absolute right-0 p-6 rounded-full cursor-pointer"
      @click="removeJobPost"
    >
      <img src="/images/icon-remove.svg" alt="Remove" />
    </buttton>
    <Card v-if="job" :job="job">
      <JobHeader :job="job" />
      <div>
        <Card>
          <div class="flex gap-x-8 pr-6">
            <p class="text-center">
              Close date
              <span class="block">
                {{ job?.closeDate }}
              </span>
            </p>
            <p class="text-center">
              Salary range
              <span class="block"> K{{ job?.salary }} </span>
            </p>
          </div>
          <a
            :href="`mailto:${job?.emailforappliction}`"
            target="_blank"
            class="bg-light-rayish-cyan--background font-semibold uppercase tracking-widest text-lg rounded-md px-8 py-3 max-w-sm"
            >Apply</a
          >
        </Card>
        <div
          class="flex text-sm gap-x-5 text-desaturated-dark-cyan font-semibold mb-4 mt-2"
        >
          <JobTag
            v-for="tag in [job.role, job.level, ...job.languages]"
            :key="tag"
            :tag="tag"
          />
        </div>
      </div>
    </Card>
    <Card v-if="job" :job="job" class="flex-col">
      <article class="whitespace-pre-wrap mb-10">
        {{ job?.jobDescription }}
      </article>
    </Card>
  </div>
  <div v-else class="flex justify-center items-center">
    <h1 class="text-2xl tracking-widest font-semibold">Loading...</h1>
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
const id = ref<string>(route.params.id as string);
const job = ref<JobPost | null>(null);
const isLoading = ref<boolean>(true);

onMounted(async () => {
  isLoading.value = true;
  job.value = await readMoreDetailsAboutAJobPost(id.value);
  isLoading.value = false;
});

const removeJobPost = async () => {
  await readMoreDetailsAboutAJobPost(id);
};
</script>
