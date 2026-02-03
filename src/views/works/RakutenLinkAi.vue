<template>
  <div class="min-h-screen" style="background: #050401;">
    <!-- Header -->
    <header class="sticky top-0 z-20 border-b bg-slate-950/80 backdrop-blur" style="border-color: #303036;">
      <div class="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        <router-link
          to="/design"
          class="flex items-center gap-2 hover:opacity-80 transition"
        >
          <svg class="w-5 h-5" style="color: #FC5130;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="text-base font-semibold" style="color: #FFFAFF;">Designに戻る</span>
        </router-link>
      </div>
    </header>

    <!-- Work Detail Content -->
    <main class="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <div class="space-y-8">
        <div class="animate-slide-up">
          <p class="text-base font-medium uppercase tracking-wide mb-3 animate-fade-in" style="color: #FC5130; animation-delay: 0.1s;">
            {{ work.category }}
          </p>
          <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight animate-slide-up" style="color: #FFFAFF; animation-delay: 0.2s;">
            {{ work.title }}
          </h1>
          <div class="h-80 md:h-96 rounded-3xl mb-8 animate-scale-in" :style="work.gradientStyle" style="animation-delay: 0.3s;"></div>
        </div>

        <div class="space-y-8">
          <div class="animate-slide-up" style="animation-delay: 0.4s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">概要</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              {{ work.description }}
            </p>
          </div>

          <div class="animate-slide-up" style="animation-delay: 0.5s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">Focus</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              {{ work.focus }}
            </p>
          </div>

          <div class="animate-slide-up" style="animation-delay: 0.6s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">Tags</h2>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="(tag, index) in work.tags"
                :key="tag"
                class="rounded-full px-4 py-2 text-base font-medium animate-scale-in"
                style="background: rgba(252, 81, 48, 0.2); color: #FC5130; border: 1px solid rgba(252, 81, 48, 0.3); animation-delay: calc(0.7s + 0.1s * index);"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- ここにフルページ専用の追加情報を記述 -->
          <!-- 例: プロセス、成果、画像など -->
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { works } from '../../data/works.js'

const work = computed(() => {
  return works.find(w => w.slug === 'rakuten-link-ai')
})

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
