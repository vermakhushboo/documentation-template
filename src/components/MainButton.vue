<template>
  <button
    class="flex items-center gap-2 px-4 py-2 rounded-md transition-all shadow-sm hover:bg-opacity-80 font-medium flex-nowrap"
    :class="classes"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  primary: boolean;
  secondary: boolean;
  text: boolean;
}>();

const classes = {
  "text-white bg-black hover:bg-opacity-80": props.primary,
  "text-black-600 border-black-500 border": props.secondary,
  "text-black-500 hover:bg-opacity-80 shadow-md": props.text,
};
</script>

<style scoped>
</style>