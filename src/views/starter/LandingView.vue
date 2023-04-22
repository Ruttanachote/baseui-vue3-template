<script setup>
import { useTemplateStore } from "@/stores/template";

// Main store
const store = useTemplateStore();
</script>

<template>
  <div class="">
    <div class="position-relative">
      <div class="position-absolute top-0 start-50 translate-middle-x mt-10">Landing content</div>
    </div>
  </div>
</template>
