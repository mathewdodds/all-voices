<template>
  <div class="antialiased">
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex items-center justify-between py-10 font-bold">
        <a class="text-xl" href="/" aria-label="All Voices">
          <img
            class="inline-block h-10 mr-2 sm:h-20"
            alt="logo"
            src="/logo.png"
          />
        </a>
        <img class="h-8 sm:h-10" src="https://cdn.dal.ca/etc/designs/dalhousie/clientlibs/global/default/images/logos/dalhousie-logo-black.svg.lt_03b76acfc2f5fdf8c1ce5ef80071ef35.res/dalhousie-logo-black.svg">
      </nav>
    </div>
    <main class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="isIndex" />
      <Article v-else />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'


const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')

</script>
