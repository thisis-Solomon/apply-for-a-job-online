<template>
  <p
    class="bg-light-rayish-cyan--background py-0.5 px-3 hover:bg-desaturated-dark-cyan max-w-sm hover:text-light-grayish-cyan--filter-tablets rounded-md cursor-pointer"
    @click="$emit('click', tag)"
  >
    {{ tag }}
  </p>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  tag: String,
});

const tag = props.tag;

const emits = defineEmits(["click"]);
</script>
