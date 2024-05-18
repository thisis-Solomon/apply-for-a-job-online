<template>
  <section
    :class="{ 'border-l-4 border-desaturated-dark-cyan': job.featured }"
    class="flex justify-between items-center bg-white rounded-md px-10 py-5 shadow-lg shadow-dark-grayish-cyan/10 my-5"
  >
    <div class="flex gap-x-5 items-center">
      <img :src="job.logo" :alt="job.company" class="h-20" />
      <div class="flex flex-col gap-y-0.5">
        <h1 class="font-bold text-lg text-desaturated-dark-cyan">
          {{ job.company }}
          <span
            v-if="job.new"
            class="bg-desaturated-dark-cyan font-semibold text-sm text-light-rayish-cyan--background px-2 py-1 rounded-full uppercase ml-5"
            >New!</span
          >
          <span
            v-if="job.featured"
            class="bg-very-dark-grayish-cyan font-semibold text-sm text-light-rayish-cyan--background px-2 py-1 rounded-full uppercase ml-2"
            >Featured</span
          >
        </h1>
        <h2 class="font-bold text-lg">{{ job.position }}</h2>
        <ul class="flex gap-2 text-dark-grayish-cyan items-center">
          <li>{{ job.postedAt }}</li>
          <span class="w-1 h-1 bg-dark-grayish-cyan rounded-full"></span>
          <li>{{ job.contract }}</li>
          <span class="w-1 h-1 bg-dark-grayish-cyan rounded-full"></span>
          <li>{{ job.location }}</li>
        </ul>
      </div>
    </div>
    <div class="flex text-sm gap-x-5 text-desaturated-dark-cyan font-semibold">
      <p
        class="bg-light-rayish-cyan--background py-0.5 px-3 hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan--filter-tablets rounded-md cursor-pointer"
        @click="addToFilter(job.role)"
      >
        {{ job.role }}
      </p>
      <p
        class="bg-light-rayish-cyan--background py-0.5 px-3 hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan--filter-tablets rounded-md cursor-pointer"
        @click="addToFilter(job.level)"
      >
        {{ job.level }}
      </p>
      <ul class="flex gap-5">
        <li
          v-for="language in job.languages"
          :key="language"
          class="bg-light-rayish-cyan--background py-0.5 px-3 hover:bg-desaturated-dark-cyan hover:text-light-grayish-cyan--filter-tablets rounded-md cursor-pointer"
          @click="addToFilter(language)"
        >
          {{ language }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  job: Object,
});

const emits = defineEmits(["add-to-filter"]);

function addToFilter(filter) {
  emits("add-to-filter", filter);
}
</script>
