<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <!-- Work Detail Page (Full Page) -->
    <Transition name="page">
      <div v-if="selectedWork" class="min-h-screen" style="background: #050401;" key="detail">
      <!-- Header -->
      <header class="sticky top-0 z-20 border-b bg-slate-950/80 backdrop-blur" style="border-color: #303036;">
        <div class="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
          <button
            @click="router.push('/')"
            class="flex items-center gap-2 hover:opacity-80 transition"
          >
            <svg class="w-5 h-5" style="color: #FC5130;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="text-sm font-semibold" style="color: #FFFAFF;">Worksに戻る</span>
          </button>
        </div>
      </header>

      <!-- Work Detail Content -->
      <main class="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div class="space-y-8">
          <div class="animate-slide-up">
            <p class="text-sm font-medium uppercase tracking-wide mb-3 animate-fade-in" style="color: #FC5130; animation-delay: 0.1s;">
              {{ selectedWork.category }}
            </p>
            <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight animate-slide-up" style="color: #FFFAFF; animation-delay: 0.2s;">
              {{ selectedWork.title }}
            </h1>
            <div class="h-80 md:h-96 rounded-3xl mb-8 animate-scale-in" :style="selectedWork.gradientStyle" style="animation-delay: 0.3s;"></div>
          </div>

          <div class="space-y-8">
            <div class="animate-slide-up" style="animation-delay: 0.4s;">
              <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">概要</h2>
              <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
                {{ selectedWork.description }}
              </p>
            </div>

            <div class="animate-slide-up" style="animation-delay: 0.5s;">
              <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">Focus</h2>
              <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
                {{ selectedWork.focus }}
              </p>
            </div>

            <div class="animate-slide-up" style="animation-delay: 0.6s;">
              <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">Tags</h2>
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="(tag, index) in selectedWork.tags"
                  :key="tag"
                  class="rounded-full px-4 py-2 text-sm font-medium animate-scale-in"
                  style="background: rgba(252, 81, 48, 0.2); color: #FC5130; border: 1px solid rgba(252, 81, 48, 0.3); animation-delay: calc(0.7s + 0.1s * index);"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </Transition>

    <!-- Main Content (Hidden when work detail is shown) -->
    <Transition name="page">
      <div v-if="!selectedWork" key="main">
      <!-- Header -->
      <header class="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div class="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        <a href="#" class="flex items-center gap-2">
          <div class="h-8 w-8 rounded-full" style="background: linear-gradient(135deg, #30BCED, #FC5130);" />
          <span class="text-sm font-semibold tracking-wide uppercase" style="color: #FFFAFF;">
            KEI SEKIGUCHI
          </span>
        </a>

        <nav class="hidden gap-6 text-sm md:flex" style="color: rgba(255, 250, 255, 0.7);">
          <a href="#works" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">Works</a>
          <a href="#about" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">About</a>
          <a href="#skills" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">Skills</a>
          <a href="#contact" class="transition hover:opacity-100" style="color: rgba(255, 250, 255, 0.7);" onmouseover="this.style.color='#FC5130'" onmouseout="this.style.color='rgba(255, 250, 255, 0.7)'">Contact</a>
        </nav>

        <a
          href="#contact"
          class="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-900 transition md:hidden"
        >
          Contact
        </a>
      </div>
    </header>

    <main>
      <!-- Hero -->
      <section class="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div class="mx-auto max-w-5xl px-4 py-16 md:py-24 space-y-12">
          <div class="space-y-6 animate-slide-up">
            <p class="text-sm font-semibold tracking-[0.25em] uppercase animate-fade-in" style="color: #FC5130; animation-delay: 0.1s;">
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

            <p class="text-sm md:text-base text-slate-300 leading-relaxed animate-slide-up" style="animation-delay: 0.3s;">
              楽天モバイル基幹アプリなどのプロダクトで、
              UXリサーチからプロトタイピング、UI設計、デザインシステム運用まで一貫して担当。
              定性・定量の根拠をもとに、意思決定と改善サイクルを前に進めます。
            </p>

            <div class="flex flex-wrap gap-3 animate-slide-up" style="animation-delay: 0.4s;">
              <a
                href="#works"
                class="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium shadow-lg active:scale-95 transition-all duration-300 hover:scale-105"
                style="background: #FC5130; color: #FFFAFF;"
                onmouseover="this.style.background='#e04520'"
                onmouseout="this.style.background='#FC5130'"
              >
                Worksを見る
              </a>
              <a
                href="#contact"
                class="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium hover:opacity-80 active:scale-95 transition-all duration-300 hover:scale-105"
                style="border-color: #FC5130; color: #FFFAFF;"
              >
                相談する
              </a>
            </div>

            <div class="flex flex-wrap gap-4 text-sm animate-slide-up" style="color: rgba(255, 250, 255, 0.6); animation-delay: 0.5s;">
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
                  <p class="text-sm text-slate-400 mt-1">Tokyo, Japan</p>
                </div>
              </div>

              <!-- 右側: 詳細情報 -->
              <div class="space-y-4">
                <div class="grid grid-cols-3 gap-3 text-sm">
                  <div class="rounded-2xl bg-slate-900/60 border border-slate-800 p-3">
                    <p class="text-slate-400">Focus</p>
                    <p class="text-sm font-semibold mt-1">UX / UI</p>
                  </div>
                  <div class="rounded-2xl bg-slate-900/60 border border-slate-800 p-3">
                    <p class="text-slate-400">Research</p>
                    <p class="text-sm font-semibold mt-1">Qual &amp; Quant</p>
                  </div>
                  <div class="rounded-2xl bg-slate-900/60 border border-slate-800 p-3">
                    <p class="text-slate-400">Language</p>
                    <p class="text-sm font-semibold mt-1">EN (TOEIC 900)</p>
                  </div>
                </div>

                <p class="text-sm text-slate-300 leading-relaxed">
                  リサーチ→課題整理→合意形成→デザイン→検証まで、プロダクトの前進に必要な一連を担います。
                </p>

                <div class="flex gap-2 text-sm text-slate-300 flex-wrap">
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

      <!-- Works -->
      <section id="works" class="border-b border-slate-800 bg-slate-900">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-6">
          <div class="space-y-2">
            <h2 class="text-xl md:text-2xl font-semibold">Selected Works</h2>
            <p class="text-sm text-slate-400">
              守秘に配慮しつつ、課題→プロセス→アウトプットが伝わる形で抜粋しています。
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <a
              v-for="(work, index) in works"
              :key="work.id"
              @click.prevent="showWorkDetail(work)"
              class="group overflow-hidden rounded-2xl border bg-slate-900/70 transition-all duration-500 cursor-pointer block fade-in-on-scroll"
              :style="`border-color: #303036; animation-delay: ${index * 0.1}s;`"
              onmouseover="this.style.borderColor='#FC5130'; this.style.transform='translateY(-8px)'; this.style.shadow='0 20px 40px rgba(252, 81, 48, 0.2)'"
              onmouseout="this.style.borderColor='#303036'; this.style.transform='translateY(0)'; this.style.shadow='none'"
            >
              <div class="h-40 bg-gradient-to-br transition-transform duration-700 group-hover:scale-110" :style="work.gradientStyle" />
              <div class="space-y-2 p-4">
                <p class="text-sm font-medium uppercase tracking-wide" style="color: #FC5130;">
                  {{ work.category }}
                </p>

                <h3 class="text-sm font-semibold group-hover:opacity-90 transition-opacity" style="color: #FFFAFF;">
                  {{ work.title }}
                </h3>

                <p class="text-sm leading-relaxed line-clamp-3" style="color: rgba(255, 250, 255, 0.7);">
                  {{ work.description }}
                </p>

                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    v-for="tag in work.tags"
                    :key="tag"
                    class="rounded-full px-2.5 py-1 text-sm"
                    style="background: rgba(48, 48, 54, 0.8); color: rgba(255, 250, 255, 0.8);"
                  >
                    {{ tag }}
                  </span>
                </div>

                <div class="pt-3 text-sm flex items-center gap-2" style="color: rgba(255, 250, 255, 0.6);">
                  <span style="color: rgba(255, 250, 255, 0.5);">Focus:</span> 
                  <span>{{ work.focus }}</span>
                  <svg class="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style="color: #FC5130;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <div class="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 text-sm text-slate-300">
            <span class="text-slate-400">Note:</span>
            公開用に実績の粒度を調整しています。詳細なケーススタディは面談等で共有可能です。
          </div>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="border-b border-slate-800 bg-slate-950">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-[1.4fr,1fr]">
          <div class="space-y-4">
            <h2 class="text-xl md:text-2xl font-semibold">About</h2>

            <p class="text-sm text-slate-300 leading-relaxed">
              大学でデザイン思考に触れて以降、サービスが生む価値と体験の関係に関心を持ち、
              UXリサーチ／UX/UIデザインを軸にキャリアを積んできました。
              現在は楽天モバイル基幹アプリ「Rakuten Link」「Rakuten Link Office」などで、
              UXリサーチ〜体験設計、UI設計、プロトタイピング、デザインシステムの構築・運用まで一貫して担当しています。
            </p>

            <p class="text-sm text-slate-300 leading-relaxed">
              私の強みは、<span class="text-slate-100 font-medium">ユーザーの不便や違和感を“言語化”し、差別化の価値提案と具体的なUIに落とし込むこと</span>です。
              要望の吸い上げに留まらず、背景・影響・優先度を整理し、関係者の合意形成を取りながら改善につなげます。
              また、多国籍メンバーが関わる環境で、英語を用いた協業・調整を日常的に行っています。
            </p>

            <div class="flex flex-wrap gap-2 pt-2 text-sm">
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
          </div>

          <div class="space-y-4">
            <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <p class="text-sm text-slate-400">Design Philosophy</p>
              <p class="mt-2 text-sm leading-relaxed text-slate-200">
                「根拠ある意思決定」と「使われ続ける体験」を両立する。
                リサーチとプロトタイピングで不確実性を減らし、チームが前に進める状態をつくります。
              </p>
            </div>

            <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <p class="text-sm text-slate-400">Strength</p>
              <ul class="mt-2 space-y-2 text-sm text-slate-200 list-disc list-inside">
                <li>課題の構造化（背景・影響・優先度）と、合意形成の推進</li>
                <li>定性/定量を繋げた改善サイクルの設計と運用</li>
                <li>デザインシステム/ライブラリで速度と品質を同時に上げる</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="border-b border-slate-800 bg-slate-900">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-6">
          <h2 class="text-xl md:text-2xl font-semibold">Skills</h2>

          <div class="grid gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
              <p class="text-sm text-slate-400">Design</p>
              <p class="mt-2 text-sm text-slate-200 leading-relaxed">
                UX Strategy / IA / User Flows / Wireframes / UI Design / Prototyping / Design Systems
              </p>
            </div>

            <div class="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
              <p class="text-sm text-slate-400">Research</p>
              <p class="mt-2 text-sm text-slate-200 leading-relaxed">
                User Interviews / Usability Testing / Heuristic Evaluation / Survey Design / Qual &amp; Quant Analysis
              </p>
            </div>

            <div class="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
              <p class="text-sm text-slate-400">Tools</p>
              <p class="mt-2 text-sm text-slate-200 leading-relaxed">
                Figma / Miro / Illustrator / Photoshop / Framer / Webflow / Blender / After Effects / Premiere Pro
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="bg-slate-950">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">Contact</h2>

          <p class="text-sm text-slate-300 leading-relaxed">
            お仕事のご相談・壁打ち歓迎です。
            目的／スケジュール／体制など、分かる範囲で添えていただけるとスムーズです（ざっくりでも大丈夫です）。
          </p>

          <div class="flex flex-wrap gap-3 pt-2 text-sm">
            <a
              :href="mailto"
              class="inline-flex items-center gap-2 rounded-full px-5 py-2 font-medium active:scale-95 transition"
              style="background: #FC5130; color: #FFFAFF;"
              onmouseover="this.style.background='#e04520'"
              onmouseout="this.style.background='#FC5130'"
            >
              メールで連絡する
            </a>
            <a
              :href="links.notions"
              class="inline-flex items-center gap-2 rounded-full border px-5 py-2 hover:opacity-80 active:scale-95 transition"
              style="border-color: #FC5130; color: #FFFAFF;"
            >
              Notion / Profile（任意）
            </a>
            <a
              :href="links.linkedin"
              class="inline-flex items-center gap-2 rounded-full border px-5 py-2 hover:opacity-80 active:scale-95 transition"
              style="border-color: #FC5130; color: #FFFAFF;"
            >
              LinkedIn（任意）
            </a>
          </div>

          <p class="text-sm text-slate-500 pt-3">
            ※ 公開に不都合な情報（実数値や内部資料）を避けた表現にしています。必要に応じて面談で補足できます。
          </p>
        </div>
      </section>
    </main>

      <footer class="border-t border-slate-800 bg-slate-950">
        <div class="mx-auto max-w-5xl px-4 py-4 text-sm text-slate-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>© {{ new Date().getFullYear() }} Kei Sekiguchi</span>
          <span>Built with Vue 3 & Tailwind CSS · Deployed on Vercel</span>
        </div>
      </footer>
    </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const mailto = "mailto:keisekuchi18@gmail.com"

const links = {
  notions: "#",
  linkedin: "#",
}

const selectedWork = ref(null)

const works = [
  {
    id: 1,
    slug: "rakuten-link-ai",
    category: "PRODUCT / AI",
    title: "Rakuten Link AI — 「楽天ならでは」を形にする体験設計",
    description:
      "新規AIアシスタントにおける差別化の曖昧さを起点に、ペルソナ分析・カスタマージャーニーで価値の軸を整理。企画・経営層との合意形成を推進し、プロトタイピングとUX/UI設計で体験の骨格を構築。",
    tags: ["UX/UI", "Prototyping", "Persona / CJM"],
    focus: "価値提案の言語化 / 合意形成 / 体験設計",
    gradientStyle: "background: linear-gradient(135deg, #30BCED, #FC5130);",
  },
  {
    id: 2,
    slug: "design-system",
    category: "DESIGN SYSTEM",
    title: "Design System — 分断されたUI資産を“共通言語”に",
    description:
      "各チームで分散していたUIパーツを棚卸しし、再利用可能な設計へ再構成。Figmaでの一元管理と、アップデート／レビュー運用を整備し、開発速度とUI一貫性の両立を支援。",
    tags: ["Component Audit", "Library", "Ops"],
    focus: "工数削減 / 品質の一貫性 / 運用設計",
    gradientStyle: "background: linear-gradient(135deg, #FC5130, #30BCED);",
  },
  {
    id: 3,
    slug: "symworld-research",
    category: "UX RESEARCH",
    title: "Symworld — リサーチを“改善につながる形”に再設計",
    description:
      "複数プロダクトで形骸化していたユーザビリティテストを見直し、手法の組み合わせと報告形式を再設計。結果の受け取り方が分かるドキュメント構成とレビュー運用で、改善サイクルを定着させた。",
    tags: ["Usability Test", "Heuristic", "UEQ"],
    focus: "手法設計 / 報告の再設計 / 改善への接続",
    gradientStyle: "background: linear-gradient(135deg, #30BCED, #FC5130);",
  },
]

// 詳細ページ表示用の関数
const showWorkDetail = (work) => {
  router.push(`/work/${work.slug}`)
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

// ルート変更を監視して作品を取得
const updateSelectedWork = () => {
  if (route.params.slug) {
    const work = works.find(w => w.slug === route.params.slug)
    if (work) {
      selectedWork.value = work
      // スクロールをトップに
      nextTick(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    } else {
      selectedWork.value = null
    }
  } else {
    selectedWork.value = null
    // メインページに戻った時にスクロールアニメーションを再初期化
    nextTick(() => {
      initScrollAnimation()
    })
  }
}

// ルート変更を監視
watch(() => route.path, () => {
  updateSelectedWork()
}, { immediate: true })

// 初期化
onMounted(() => {
  updateSelectedWork()
  initScrollAnimation()
})
</script>
