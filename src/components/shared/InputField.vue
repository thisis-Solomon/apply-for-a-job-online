<template>
  <div class="flex flex-col mb-2">
    <label :for="inputId" class="text-very-dark-grayish-cyan font-light px-1">{{
      label
    }}</label>
    <input
      v-if="type"
      :type="type"
      :id="inputId"
      class="px-1 py-2 border rounded-md placeholder:font-light focus:ring-slate-400 outline-none"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <textarea
      v-else
      :id="inputId"
      rows="10"
      :placeholder="placeholder"
      class="px-1 py-2 border rounded-md placeholder:font-light focus:ring-slate-400 outline-none"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
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
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const inputId = computed(
  () => `input-${Math.random().toString(36).substr(2, 9)}`
);
</script>
