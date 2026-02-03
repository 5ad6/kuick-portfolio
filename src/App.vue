<template>
  <div>
    <RouterView />
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg transition hover:scale-105 active:scale-95"
      style="background: #FC5130; color: #FFFAFF;"
      aria-label="ページの先頭へ戻る"
      onmouseover="this.style.background='#e04520'"
      onmouseout="this.style.background='#FC5130'"
    >
      <svg class="h-5 w-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'

const showScrollTop = ref(false)

const onScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
