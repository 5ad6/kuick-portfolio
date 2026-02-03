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
          <router-link to="/design" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">Design</router-link>
          <router-link to="/music" class="transition hover:opacity-100" style="color: #FC5130;">Music</router-link>
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
            :style="{ color: 'rgba(255, 250, 255, 0.7)' }"
            onmouseover="this.style.color='#FC5130'"
            onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'"
          >
            Design
          </router-link>
          <router-link
            to="/music"
            @click="mobileMenuOpen = false"
            class="transition hover:opacity-100"
            style="color: #FC5130;"
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
      <!-- Music Section -->
      <section class="border-b border-slate-800 bg-slate-900">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-8">
          <div class="space-y-2">
            <h1 class="text-2xl md:text-3xl font-semibold">Music</h1>
            <p class="text-base text-slate-400">
              幼少期から音楽が大好きで、kuickという名義でトラックメイカー・DJとしても活動しています。
            </p>
          </div>

          <!-- Gallery Grid -->
          <div class="grid gap-6 md:grid-cols-3">
            <div
              v-for="(track, index) in music"
              :key="track.id"
              class="group cursor-pointer fade-in-on-scroll"
              :style="`animation-delay: ${index * 0.1}s;`"
            >
              <!-- Artwork -->
              <div class="relative aspect-square overflow-hidden rounded-lg mb-3 bg-slate-800">
                <img
                  :src="track.artwork"
                  :alt="track.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 skeleton-img"
                  @load="handleImageLoad"
                  @error="handleImageError($event)"
                />
              </div>

              <!-- Category -->
              <p class="text-base text-slate-400 mb-1">
                {{ track.category }}
              </p>

              <!-- Title / Artist -->
              <p class="text-base font-semibold" style="color: #FFFAFF;">
                {{ track.title }} by {{ track.artist }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-800 bg-slate-950">
      <div class="mx-auto max-w-5xl px-4 py-4 text-base text-slate-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <span>© {{ new Date().getFullYear() }} Kei Sekiguchi</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { music } from '../data/music.js'

// モバイルメニューの開閉状態
const mobileMenuOpen = ref(false)

const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src)
  // フォールバック画像を設定する場合はここで処理
}

const handleImageLoad = (event) => {
  event.target.classList.add('is-loaded')
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

// 初期化
onMounted(() => {
  initScrollAnimation()
})
</script>
