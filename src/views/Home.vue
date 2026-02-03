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
          <router-link to="/" class="transition hover:opacity-100" style="color: #FC5130;">Home</router-link>
          <router-link to="/design" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">Design</router-link>
          <router-link to="/music" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">Music</router-link>
          <a href="#about" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">About</a>
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
            style="color: #FC5130;"
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
            :style="{ color: 'rgba(255, 250, 255, 0.7)' }"
            onmouseover="this.style.color='#FC5130'"
            onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'"
          >
            Music
          </router-link>
          <a
            href="#about"
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
      <!-- Hero -->
      <section class="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div class="mx-auto max-w-5xl px-4 py-16 md:py-24 space-y-12">
          <div class="space-y-6 animate-slide-up">
            <p class="text-base font-semibold tracking-[0.25em] uppercase animate-fade-in" style="color: #FC5130; animation-delay: 0.1s;">
              UX/UI Designer · UX Researcher
            </p>

            <h1 class="text-3xl md:text-5xl font-semibold leading-tight animate-slide-up" style="animation-delay: 0.2s;">
              “ユーザーの違和感”を見つけ、
              <span
                class="inline-block bg-clip-text text-transparent animate-gradient"
                style="background-image: linear-gradient(135deg, #30BCED, #FC5130); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
              >
                価値提案と体験設計
              </span>
              に落とし込む。
            </h1>

            <p class="text-base text-slate-300 leading-relaxed animate-slide-up" style="animation-delay: 0.3s;">
              楽天モバイル基幹アプリなどのプロダクトで、
              UXリサーチからプロトタイピング、UI設計、デザインシステム運用まで一貫して担当。
              定性・定量の根拠をもとに、意思決定と改善サイクルを前に進めます。
            </p>

            <div class="flex flex-wrap gap-3 animate-slide-up" style="animation-delay: 0.4s;">
              <router-link
                to="/design"
                class="inline-flex items-center gap-2 rounded-full px-5 py-2 text-base font-medium shadow-lg active:scale-95 transition-all duration-300 hover:scale-105"
                style="background: #FC5130; color: #FFFAFF;"
                onmouseover="this.style.background='#e04520'"
                onmouseout="this.style.background='#FC5130'"
              >
                UI/UX Worksを見る
              </router-link>
            </div>

            <div class="flex flex-wrap gap-4 text-base animate-slide-up" style="color: rgba(255, 250, 255, 0.6); animation-delay: 0.5s;">
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full animate-float" style="background: #FC5130;" /> 現在、新規案件のご相談受付中
              </span>
              <span>Mobile App / AI Assistant / Design Systems</span>
            </div>
          </div>

          <!-- Profile card - 横長レイアウト -->
          <div
            class="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-indigo-950/50 animate-scale-in"
            style="animation-delay: 0.3s;"
          >
            <div class="grid md:grid-cols-[auto,1fr] gap-6 items-start">
              <!-- 左側: プロフィール情報 -->
              <div class="flex items-center gap-4">
                <div class="h-16 w-16 rounded-full flex-shrink-0" style="background: linear-gradient(135deg, #30BCED, #FC5130);" />
                <div>
                  <p class="text-base font-semibold">関口 慧 / Kei Sekiguchi</p>
                  <p class="text-base text-slate-400 mt-1">Tokyo, Japan</p>
                </div>
              </div>

              <!-- 右側: 詳細情報 -->
              <div class="space-y-4">
                <div class="grid grid-cols-3 gap-3 text-base">
                  <div class="rounded-2xl bg-slate-900/60 border border-slate-800 p-3">
                    <p class="text-slate-400">Focus</p>
                    <p class="text-base font-semibold mt-1">UX / UI</p>
                  </div>
                  <div class="rounded-2xl bg-slate-900/60 border border-slate-800 p-3">
                    <p class="text-slate-400">Research</p>
                    <p class="text-base font-semibold mt-1">Qual &amp; Quant</p>
                  </div>
                  <div class="rounded-2xl bg-slate-900/60 border border-slate-800 p-3">
                    <p class="text-slate-400">Language</p>
                    <p class="text-base font-semibold mt-1">EN (TOEIC 900)</p>
                  </div>
                </div>

                <p class="text-base text-slate-300 leading-relaxed">
                  リサーチ→課題整理→合意形成→デザイン→検証まで、プロダクトの前進に必要な一連を担います。
                </p>

                <div class="flex gap-2 text-base text-slate-300 flex-wrap">
                  <span class="rounded-full bg-slate-800 px-3 py-1">UX Strategy</span>
                  <span class="rounded-full bg-slate-800 px-3 py-1">Prototyping</span>
                  <span class="rounded-full bg-slate-800 px-3 py-1">Design System</span>
                  <span class="rounded-full bg-slate-800 px-3 py-1">User Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- UI/UX Works -->
      <section id="works" class="border-b border-slate-800 bg-slate-900">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-6">
          <div class="flex items-center justify-between gap-4 flex-wrap">
            <div class="space-y-2">
              <h2 class="text-xl md:text-2xl font-semibold">UI/UX Works</h2>
              <p class="text-base text-slate-400">
                守秘に配慮しつつ、課題→プロセス→アウトプットが伝わる形で抜粋しています。
              </p>
            </div>
            <router-link
              to="/design"
              class="inline-flex items-center gap-2 rounded-full px-5 py-2 text-base font-medium shadow-lg active:scale-95 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style="background: #FC5130; color: #FFFAFF;"
              onmouseover="this.style.background='#e04520'"
              onmouseout="this.style.background='#FC5130'"
            >
              すべてのUI/UX Worksを見る
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>

          <div class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 md:grid md:grid-cols-2 md:overflow-visible md:snap-none">
            <router-link
              v-for="(work, index) in displayedWorks"
              :key="work.id"
              :to="`/design/${work.slug}`"
              class="group overflow-hidden rounded-2xl border bg-slate-900/70 transition-all duration-500 cursor-pointer block snap-start min-w-[260px] sm:min-w-[320px] md:min-w-0"
              :style="`border-color: #303036;`"
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
        </div>
      </section>

      <!-- About & Skills -->
      <section id="about" class="border-b border-slate-800 bg-slate-950">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-[1.4fr,1fr]">
          <div class="space-y-4">
            <h2 class="text-xl md:text-2xl font-semibold">About</h2>

            <p class="text-base text-slate-300 leading-relaxed">
              大学でデザイン思考に触れて以降、サービスが生む価値と体験の関係に関心を持ち、
              UXリサーチ／UX/UIデザインを軸にキャリアを積んできました。
              現在は楽天モバイル基幹アプリ「Rakuten Link」「Rakuten Link Office」などで、
              UXリサーチ〜体験設計、UI設計、プロトタイピング、デザインシステムの構築・運用まで一貫して担当しています。
            </p>

            <p class="text-base text-slate-300 leading-relaxed">
              私の強みは、<span class="text-slate-100 font-medium">ユーザーの不便や違和感を“言語化”し、差別化の価値提案と具体的なUIに落とし込むこと</span>です。
              要望の吸い上げに留まらず、背景・影響・優先度を整理し、関係者の合意形成を取りながら改善につなげます。
              また、多国籍メンバーが関わる環境で、英語を用いた協業・調整を日常的に行っています。
            </p>

            <div class="flex flex-wrap gap-2 pt-2 text-base">
              <span class="rounded-full border border-slate-700 bg-slate-900/40 px-3 py-1 text-slate-200">
                Google UX Design Certificate
              </span>
              <span class="rounded-full border border-slate-700 bg-slate-900/40 px-3 py-1 text-slate-200">
                TOEIC 900
              </span>
              <span class="rounded-full border border-slate-700 bg-slate-900/40 px-3 py-1 text-slate-200">
                英語環境で業務遂行
              </span>
            </div>

            <!-- Skills -->
            <div class="pt-8">
              <h3 class="text-lg md:text-xl font-semibold mb-4">Skills</h3>
              <div class="grid gap-4 md:grid-cols-3">
                <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                  <p class="text-base text-slate-400">Design</p>
                  <p class="mt-2 text-base text-slate-200 leading-relaxed">
                    UX Strategy / IA / User Flows / Wireframes / UI Design / Prototyping / Design Systems
                  </p>
                </div>

                <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                  <p class="text-base text-slate-400">Research</p>
                  <p class="mt-2 text-base text-slate-200 leading-relaxed">
                    User Interviews / Usability Testing / Heuristic Evaluation / Survey Design / Qual &amp; Quant Analysis
                  </p>
                </div>

                <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                  <p class="text-base text-slate-400">Tools</p>
                  <p class="mt-2 text-base text-slate-200 leading-relaxed">
                    Figma / Miro / Illustrator / Photoshop / Framer / Webflow / Blender / After Effects / Premiere Pro
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <p class="text-base text-slate-400">Design Philosophy</p>
              <p class="mt-2 text-base leading-relaxed text-slate-200">
                「根拠ある意思決定」と「使われ続ける体験」を両立する。
                リサーチとプロトタイピングで不確実性を減らし、チームが前に進める状態をつくります。
              </p>
            </div>

            <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <p class="text-base text-slate-400">Strength</p>
              <ul class="mt-2 space-y-2 text-base text-slate-200 list-disc list-inside">
                <li>課題の構造化（背景・影響・優先度）と、合意形成の推進</li>
                <li>定性/定量を繋げた改善サイクルの設計と運用</li>
                <li>デザインシステム/ライブラリで速度と品質を同時に上げる</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="bg-slate-950">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">Contact</h2>

          <p class="text-base text-slate-300 leading-relaxed">
            お仕事のご相談・壁打ち歓迎です。
            目的／スケジュール／体制など、分かる範囲で添えていただけるとスムーズです（ざっくりでも大丈夫です）。
          </p>

          <div class="flex flex-wrap gap-3 pt-2 text-base">
            <a
              :href="mailto"
              class="inline-flex items-center gap-2 rounded-full px-5 py-2 font-medium active:scale-95 transition"
              style="background: #FC5130; color: #FFFAFF;"
              onmouseover="this.style.background='#e04520'"
              onmouseout="this.style.background='#FC5130'"
            >
              メールで連絡する
            </a>
          </div>

          <p class="text-base text-slate-500 pt-3">
            ※ 公開に不都合な情報（実数値や内部資料）を避けた表現にしています。必要に応じて面談で補足できます。
          </p>
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
import { computed, ref } from 'vue'
import { works } from '../data/works.js'

const mailto = "mailto:keisekuchi18@gmail.com"

const links = {
  notions: "#",
  linkedin: "#",
}

// 最初の4つのWorksのみ表示
const displayedWorks = computed(() => {
  return works.slice(0, 4)
})

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
</script>
