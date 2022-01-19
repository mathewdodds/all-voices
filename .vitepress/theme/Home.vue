<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'
</script>

<template>
  <div class="divide-y divide-gray-200">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 class="text-xl font-bold">What is <i class="text-pink-600">All Voices</i> ?</h1>
      <p class="text-lg leading-7 text-black">{{ $frontmatter.subtext }}</p>
    </div>
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 class="text-xl font-bold">About Mathew</h1>
      <p class="text-lg leading-7 text-black">{{ $frontmatter.about }}</p>
    </div>
    <ul class="divide-y divide-gray-200">
      <li class="py-12" v-for="{ title, href, date, excerpt } of posts">
        <article
          class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
        >
          <Date :date="date" />
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl font-bold leading-8 tracking-tight">
                <a class="text-gray-900" :href="href">{{ title }}</a>
              </h2>
              <div
                v-if="excerpt"
                class="prose text-gray-500 max-w-none"
                v-html="excerpt"
              ></div>
            </div>
            <div class="text-base font-medium leading-6">
              <a class="link" aria-label="read more" :href="href"
                >Read more →</a
              >
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
