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
          <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6 animate-fade-in" style="animation-delay: 0.1s;">
            <p class="text-base font-medium uppercase tracking-wide" style="color: #FC5130;">
              {{ work.category }}
            </p>
            <a
              v-if="work.url"
              :href="work.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full h-8 px-5 text-base font-medium hover:opacity-80 active:scale-95 transition"
              style="background: #FC5130; color: #FFFAFF;"
              onmouseover="this.style.background='#e04520'"
              onmouseout="this.style.background='#FC5130'"
            >
              実際のサイトを見る
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14" />
              </svg>
            </a>
          </div>
          <div class="mb-6">
            <h1 class="text-3xl md:text-4xl font-bold leading-tight animate-slide-up" style="color: #FFFAFF; animation-delay: 0.2s;">
              {{ work.title }}
            </h1>
          </div>
          <div v-if="work.image" class="mb-8 animate-scale-in" style="animation-delay: 0.3s;">
            <img :src="work.image" :alt="work.title" class="w-full h-auto rounded-3xl skeleton-img" @load="handleImageLoad" />
          </div>
          <div v-else class="h-80 md:h-96 rounded-3xl mb-8 animate-scale-in" :style="getWorkVisualStyle(work)" style="animation-delay: 0.3s;"></div>
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
  return works.find(w => w.slug === 'toi-lp-design')
})

const getWorkVisualStyle = (work) => {
  if (work?.image) {
    return {
      backgroundImage: `url(${work.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  }
  return work?.gradientStyle || ''
}

const handleImageLoad = (event) => {
  event.target.classList.add('is-loaded')
}

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
