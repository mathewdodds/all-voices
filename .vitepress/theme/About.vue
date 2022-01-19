<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'
</script>

<template>
  <div class="divide-y divide-gray-200">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      
    </div>
    <div class="divide-y divide-gray-200">
      <p class="leading-7 text-gray-500 text-md">{{ $frontmatter.about }}</p>
    </div>
  </div>
</template>
