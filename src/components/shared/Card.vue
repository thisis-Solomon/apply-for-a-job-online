<template>
  <section
    :class="dynamicClasses"
    class="flex justify-between items-center bg-white rounded-md px-10 py-5 shadow-lg shadow-dark-grayish-cyan/10 my-5"
  >
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
  job: {
    type: Object,
    required: false,
  },
});

const featured = props.job?.featured || false;

const dynamicClasses = computed(() => ({
  "border-l-4 border-desaturated-dark-cyan": featured,
}));
</script>
