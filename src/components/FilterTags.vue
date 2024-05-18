<template>
    <section v-if="filters.length > 0" class="absolute -top-[100px] flex w-full justify-between items-center bg-white rounded-md px-10 py-5 shadow-lg shadow-dark-grayish-cyan/10">
      <ul class="flex gap-x-10">
        <li v-for="filter in filters" :key="filter" class="relative rounded-md bg-light-rayish-cyan--background py-0.5 px-3 font-semibold text-desaturated-dark-cyan flex items-center justify-between">
          <span>{{ filter }}</span>
          <button @click="removeFilter(filter)" class="absolute rounded-r-md bg-desaturated-dark-cyan -right-6 h-full flex p-1.5 hover:bg-very-dark-grayish-cyan cursor-pointer">
            <img src="/images/icon-remove.svg" alt="Remove" />
          </button>
        </li>
      </ul>
      <button @click="clearFilters" class="py-0.5 px-3 text-desaturated-dark-cyan font-bold hover:underline">Clear</button>
    </section>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from "vue";
  
  const props = defineProps({
    filters: Array
  });
  
  const emits = defineEmits(["remove-filter", "clear-filters"]);
  
  function removeFilter(filter) {
    emits("remove-filter", filter);
  }
  
  function clearFilters() {
    emits("clear-filters");
  }
  </script>
  