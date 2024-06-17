<template>
  <section
    v-if="errorMessage"
    class="absolute top-[130px] left-[50%] -right-[50%] -translate-x-2/4 flex w-[50%] justify-between items-center bg-white rounded-md px-10 py-5 shadow-lg shadow-dark-grayish-cyan/10"
  >
    <h1 class="text-red-500">{{ errorMessage }}</h1>
    <!-- <Card> errorMessage </Card> -->
    <button @click="resetErrorMessage">
      <img
        src="/public/images/icon-remove.svg"
        alt="clear error"
        class="bg-red-400 h-6 p-1 rounded-md"
      />
    </button>
  </section>
  <div v-if="!isLoading" class="relative container p-2 mx-auto w-[80%]">
    <button
      class="bg-red-400 absolute right-0 p-6 rounded-full cursor-pointer hover:bg-red-800 transition-colors duration-100 ease-in-out"
      @click="removeJobPost"
    >
      <img src="/images/icon-remove.svg" alt="Remove" />
    </button>
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
            <p class="text-center" v-if="job.salary">
              Salary range
              <span class="block"> K{{ job?.salary }} </span>
            </p>
          </div>
          <a
            :href="`mailto:${job?.emailforapplication}`"
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
import { useRoute, useRouter } from "vue-router";
import JobHeader from "../components/JobHeader.vue";
import JobTag from "../components/JobTag.vue";
import Card from "../components/shared/Card.vue";
import {
  readMoreDetailsAboutAJobPost,
  removeClosedJobPost,
} from "../controllers/data";
import { JobPost } from "../types/types";

const route = useRoute();
const router = useRouter();
const id = ref<string>(route.params.id as string);
const job = ref<JobPost | null>(null);
const isLoading = ref<boolean>(true);
const errorMessage = ref(null);

onMounted(async () => {
  isLoading.value = true;
  job.value = await readMoreDetailsAboutAJobPost(id.value);
  isLoading.value = false;
});

const removeJobPost = async () => {
  try {
    if (job.value) {
      await removeClosedJobPost(id.value);
      router.push({ name: "Home" });
    }
  } catch (error) {
    errorMessage.value = "Failed to remove job post: " + error.message;
  }
};

const resetErrorMessage = () => {
  errorMessage.value = null;
};
</script>
