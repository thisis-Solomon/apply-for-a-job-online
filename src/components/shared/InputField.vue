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
      @input="updateValue"
    />
    <textarea
      v-else
      :id="inputId"
      rows="10"
      :placeholder="placeholder"
      class="px-1 py-2 border rounded-md placeholder:font-light focus:ring-slate-400 outline-none"
      @input="updateValue"
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

const { label, placeholder, type } = props;

const emits = defineEmits(["update:modelValue"]);

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
}

const inputId = computed(
  () => `input-${Math.random().toString(36).substr(2, 9)}`
);
</script>
