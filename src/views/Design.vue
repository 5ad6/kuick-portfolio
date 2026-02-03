<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <!-- Header -->
    <header class="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div class="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        <router-link to="/" class="flex items-center gap-2">
          <div class="h-8 w-8 rounded-full" style="background: linear-gradient(135deg, #30BCED, #FC5130);" />
          <span class="text-base font-semibold tracking-wide uppercase" style="color: #FFFAFF;">
            KEI SEKIGUCHI
          </span>
        </router-link>

        <nav class="hidden gap-6 text-base md:flex" style="color: rgba(255, 250, 255, 0.7);">
          <router-link to="/" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">Home</router-link>
          <router-link to="/design" class="transition hover:opacity-100" style="color: #FC5130;">Design</router-link>
          <router-link to="/music" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">Music</router-link>
          <a href="/#about" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">About</a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-slate-800 transition"
          style="color: #FFFAFF;"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur"
      >
        <nav class="flex flex-col gap-4 px-4 py-4 text-base" style="color: rgba(255, 250, 255, 0.7);">
          <router-link
            to="/"
            @click="mobileMenuOpen = false"
            class="transition hover:opacity-100"
            :style="{ color: 'rgba(255, 250, 255, 0.7)' }"
            onmouseover="this.style.color='#FC5130'"
            onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'"
          >
            Home
          </router-link>
          <router-link
            to="/design"
            @click="mobileMenuOpen = false"
            class="transition hover:opacity-100"
            style="color: #FC5130;"
          >
            Design
          </router-link>
          <router-link
            to="/music"
            @click="mobileMenuOpen = false"
            class="transition hover:opacity-100"
            :style="{ color: 'rgba(255, 250, 255, 0.7)' }"
            onmouseover="this.style.color='#FC5130'"
            onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'"
          >
            Music
          </router-link>
          <a
            href="/#about"
            @click="mobileMenuOpen = false"
            class="transition hover:opacity-100"
            :style="{ color: 'rgba(255, 250, 255, 0.7)' }"
            onmouseover="this.style.color='#FC5130'"
            onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'"
          >
            About
          </a>
        </nav>
      </div>
    </header>

    <main>
      <!-- UI/UX Design Section -->
      <section class="border-b border-slate-800 bg-slate-900">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-6">
          <div class="space-y-2">
            <h1 class="text-2xl md:text-3xl font-semibold">UI/UX Design</h1>
            <p class="text-base text-slate-400">
              守秘に配慮しつつ、課題→プロセス→アウトプットが伝わる形で抜粋しています。
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <router-link
              v-for="(work, index) in works"
              :key="work.id"
              :to="`/design/${work.slug}`"
              class="group overflow-hidden rounded-2xl border bg-slate-900/70 transition-all duration-500 cursor-pointer block fade-in-on-scroll"
              :style="`border-color: #303036; animation-delay: ${index * 0.1}s;`"
              onmouseover="this.style.borderColor='#FC5130'; this.style.transform='translateY(-8px)'; this.style.shadow='0 20px 40px rgba(252, 81, 48, 0.2)'"
              onmouseout="this.style.borderColor='#303036'; this.style.transform='translateY(0)'; this.style.shadow='none'"
            >
              <div class="h-64 bg-gradient-to-br transition-transform duration-700 group-hover:scale-110" :style="getWorkVisualStyle(work)" />
              <div class="space-y-2 p-4">
                <p class="text-base font-medium uppercase tracking-wide" style="color: #FC5130;">
                  {{ work.category }}
                </p>

                <h3 class="text-base font-semibold group-hover:opacity-90 transition-opacity" style="color: #FFFAFF;">
                  {{ work.title }}
                </h3>

                <p class="text-base leading-relaxed line-clamp-3" style="color: rgba(255, 250, 255, 0.7);">
                  {{ work.description }}
                </p>

                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    v-for="tag in work.tags"
                    :key="tag"
                    class="rounded-full px-2.5 py-1 text-base"
                    style="background: rgba(48, 48, 54, 0.8); color: rgba(255, 250, 255, 0.8);"
                  >
                    {{ tag }}
                  </span>
                </div>

                <div class="pt-3 text-base flex items-center gap-2" style="color: rgba(255, 250, 255, 0.6);">
                  <span style="color: rgba(255, 250, 255, 0.5);">Focus:</span> 
                  <span>{{ work.focus }}</span>
                  <svg class="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style="color: #FC5130;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </router-link>
          </div>

          <div class="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-base text-slate-300">
            <span class="text-slate-400">Note:</span>
            公開用に実績の粒度を調整しています。詳細なケーススタディは面談等で共有可能です。
          </div>
        </div>
      </section>

      <!-- Graphic Design Section -->
      <section v-if="graphicDesign.length > 0" class="border-b border-slate-800 bg-slate-950">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-6">
          <div class="space-y-2">
            <h2 class="text-2xl md:text-3xl font-semibold">Graphic Design</h2>
            <p class="text-base text-slate-400">
              グラフィックデザインの作品を紹介しています。
            </p>
          </div>

          <!-- Masonry Gallery (画像比率を維持して敷き詰め) -->
          <div class="columns-1 md:columns-3 gap-4">
            <div
              v-for="(item, index) in graphicDesign"
              :key="item.id"
              class="group cursor-pointer fade-in-on-scroll break-inside-avoid mb-4"
              :style="`animation-delay: ${index * 0.1}s;`"
            >
              <div class="relative w-full overflow-hidden rounded-lg bg-slate-800 transition-transform duration-500 group-hover:scale-105">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-auto object-contain skeleton-img"
                  @load="handleImageLoad"
                  @error="handleImageError($event)"
                />
                <!-- Overlay (mobile: always visible, desktop: on hover) -->
                <div class="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div class="text-white">
                    <p class="text-sm mb-1">{{ item.category }}</p>
                    <h3 class="text-base font-semibold mb-2">{{ item.title }}</h3>
                    <p class="text-sm line-clamp-2">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-800 bg-slate-950">
      <div class="mx-auto max-w-5xl px-4 py-4 text-base text-slate-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <span>© {{ new Date().getFullYear() }} Kei Sekiguchi</span>
        <span>Built with Vue 3 & Tailwind CSS · Deployed on Vercel</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { works } from '../data/works.js'
import { graphicDesign } from '../data/graphicDesign.js'

// モバイルメニューの開閉状態
const mobileMenuOpen = ref(false)

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

// スクロールアニメーション用のIntersection Observer
let observer = null

const initScrollAnimation = () => {
  // 既存のObserverをクリーンアップ
  if (observer) {
    observer.disconnect()
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // スクロールアニメーション対象の要素を監視
  nextTick(() => {
    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
      // 一度visibleクラスを削除してから再監視
      el.classList.remove('visible')
      observer.observe(el)
    })
  })
}

// 画像エラーハンドリング
const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src)
  // フォールバック画像を設定する場合はここで処理
}

const handleImageLoad = (event) => {
  event.target.classList.add('is-loaded')
}

// 初期化
onMounted(() => {
  initScrollAnimation()
})
</script>
