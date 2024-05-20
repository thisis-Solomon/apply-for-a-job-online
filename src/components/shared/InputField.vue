<template>
  <div class="flex flex-col mb-2">
    <label :for="inputId" class="text-very-dark-grayish-cyan font-light px-1">{{
      label
    }}</label>
    <input
      v-if="type !== 'textarea'"
      :type="text"
      :id="inputId"
      class="px-1 py-2 border rounded-md placeholder:font-light focus:ring-slate-400 outline-none"
      :placeholder="placeholder"
    />
    <textarea
      rows="10"
      v-else
      :placeholder="placeholder"
      class="px-1 py-2 border rounded-md placeholder:font-light focus:ring-slate-400 outline-none"
    ></textarea>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Default label",
  },
  placeholder: {
    type: String,
    default: "Enter text",
  },
  type: {
    type: String,
    default: "text",
  },
});

const inputId = computed(
  () => `input-${Math.random().toString(36).substr(2, 9)}`
);
</script>
