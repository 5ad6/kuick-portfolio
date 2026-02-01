<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
    <!-- 装飾的な背景要素 -->
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
      <div class="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" />
    </div>

    <!-- ナビバー -->
    <header class="sticky top-0 z-20 border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-xl">
      <div class="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <div class="flex items-center gap-3 group cursor-pointer">
          <div class="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300" />
          <span class="text-sm font-bold tracking-wider uppercase text-slate-100 group-hover:text-white transition-colors">
            K DESIGN
          </span>
        </div>
        <nav class="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#works" class="relative hover:text-white transition-colors duration-200 group">
            Works
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-emerald-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#about" class="relative hover:text-white transition-colors duration-200 group">
            About
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-emerald-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#contact" class="relative hover:text-white transition-colors duration-200 group">
            Contact
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-emerald-400 group-hover:w-full transition-all duration-300" />
          </a>
        </nav>
      </div>
    </header>

    <main>
      <!-- ヒーロー -->
      <section
        class="border-b border-slate-800/50 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/50 relative overflow-hidden"
      >
        <div class="mx-auto max-w-6xl px-6 py-20 md:py-32 grid md:grid-cols-[1.8fr,1.2fr] gap-12 items-center">
          <!-- テキスト -->
          <div class="space-y-8 animate-fade-in">
            <p class="text-xs font-bold tracking-[0.3em] text-indigo-400/90 uppercase animate-slide-up">
              PRODUCT DESIGNER / UI &amp; BRANDING
            </p>
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-up" style="animation-delay: 0.1s;">
              デジタルとブランドの
              <span class="block mt-2 bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                つながり
              </span>
              をデザインします。
            </h1>
            <p class="text-base md:text-lg text-slate-300/90 leading-relaxed max-w-2xl animate-slide-up" style="animation-delay: 0.2s;">
              プロダクトの使いやすさから、ビジュアルアイデンティティまで。
              サービスの「らしさ」を見つけて、UI デザインとブランド表現に落とし込むことが得意です。
            </p>

            <div class="flex flex-wrap gap-4 animate-slide-up" style="animation-delay: 0.3s;">
              <a
                href="#works"
                class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-100 to-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                作品を見る
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                class="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-slate-100 hover:border-slate-600 hover:bg-slate-800/50 active:scale-95 transition-all duration-300"
              >
                お仕事の相談をする
              </a>
            </div>

            <div class="flex flex-wrap gap-6 text-xs text-slate-400/80 animate-slide-up" style="animation-delay: 0.4s;">
              <span class="inline-flex items-center gap-2.5">
                <span class="relative flex h-2.5 w-2.5">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                フリーランス受付中
              </span>
              <span class="text-slate-500">Figma / Web / App / Branding</span>
            </div>
          </div>

          <!-- プロフィールカード -->
          <div class="flex items-center md:justify-end animate-fade-in" style="animation-delay: 0.2s;">
            <div class="group w-full max-w-sm rounded-3xl border border-slate-800/50 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl p-6 shadow-2xl shadow-indigo-950/30 hover:shadow-indigo-950/50 hover:border-slate-700/50 transition-all duration-500 space-y-5">
              <div class="flex items-center gap-4">
                <div class="relative h-14 w-14 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                  <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 animate-pulse opacity-75"></div>
                </div>
                <div>
                  <p class="text-base font-bold text-slate-100">K / Designer</p>
                  <p class="text-xs text-slate-400/80">Tokyo, Japan</p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4 text-xs border-t border-slate-800/50 pt-4">
                <div>
                  <p class="text-slate-500 mb-1">Experience</p>
                  <p class="text-base font-bold text-slate-100">5+ yrs</p>
                </div>
                <div>
                  <p class="text-slate-500 mb-1">Projects</p>
                  <p class="text-base font-bold text-slate-100">30+</p>
                </div>
                <div>
                  <p class="text-slate-500 mb-1">Satisfaction</p>
                  <p class="text-base font-bold text-slate-100">98%</p>
                </div>
              </div>
              <p class="text-xs text-slate-300/80 leading-relaxed">
                SaaS・スタートアップを中心に、プロダクトデザインとブランドを一貫してサポートしています。
              </p>
              <div class="flex gap-2 text-xs text-slate-300 flex-wrap">
                <span class="rounded-full bg-slate-800/50 border border-slate-700/30 px-3.5 py-1.5 hover:bg-slate-800 hover:border-slate-600 transition-colors">UI Design</span>
                <span class="rounded-full bg-slate-800/50 border border-slate-700/30 px-3.5 py-1.5 hover:bg-slate-800 hover:border-slate-600 transition-colors">Design System</span>
                <span class="rounded-full bg-slate-800/50 border border-slate-700/30 px-3.5 py-1.5 hover:bg-slate-800 hover:border-slate-600 transition-colors">Branding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Works セクション -->
      <section id="works" class="border-b border-slate-800/50 bg-gradient-to-b from-slate-900 to-slate-950/50 relative">
        <div class="mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-10">
          <div class="flex items-end justify-between gap-4">
            <div>
              <h2 class="text-2xl md:text-4xl font-bold tracking-tight">Selected Works</h2>
              <p class="text-sm md:text-base text-slate-400/80 mt-2 max-w-2xl">
                プロダクト UI・ブランドサイト・ロゴなど、最近の案件をピックアップしました。
              </p>
            </div>
            <p class="hidden text-xs text-slate-500/60 md:block">
              ※ 実案件に差し替えるだけでポートフォリオとして使えます
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <article
              v-for="(work, index) in works"
              :key="work.id"
              class="group cursor-pointer overflow-hidden rounded-3xl border border-slate-800/50 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm hover:border-slate-700/50 hover:shadow-2xl hover:shadow-indigo-950/30 transition-all duration-500 hover:-translate-y-1"
              style="animation-delay: 0.1s;"
            >
              <div class="relative h-48 overflow-hidden">
                <div
                  class="h-full bg-gradient-to-br transition-transform duration-700 group-hover:scale-110"
                  :class="work.gradient"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div class="space-y-3 p-5">
                <p class="text-xs font-bold text-indigo-400/90 uppercase tracking-wider">
                  {{ work.category }}
                </p>
                <h3 class="text-base font-bold group-hover:text-white transition-colors">
                  {{ work.title }}
                </h3>
                <p class="text-xs text-slate-400/80 line-clamp-2 leading-relaxed">
                  {{ work.description }}
                </p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    v-for="tag in work.tags"
                    :key="tag"
                    class="rounded-full bg-slate-800/50 border border-slate-700/30 px-3 py-1 text-[11px] text-slate-300/80 hover:bg-slate-800 hover:border-slate-600 transition-colors"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- About セクション -->
      <section id="about" class="border-b border-slate-800/50 bg-gradient-to-b from-slate-950 to-slate-900/30">
        <div class="mx-auto max-w-6xl px-6 py-16 md:py-24 grid gap-12 md:grid-cols-[1.4fr,1fr]">
          <div class="space-y-6">
            <h2 class="text-2xl md:text-4xl font-bold tracking-tight">About</h2>
            <div class="space-y-4">
              <p class="text-base text-slate-300/90 leading-relaxed">
                プロダクトの体験とブランドの一貫性を大切にしながら、
                「ちゃんと使われ続けるデザイン」を意識して制作しています。
                エンジニアとの協業や、デザインシステムの構築も得意です。
              </p>
              <p class="text-base text-slate-300/90 leading-relaxed">
                0→1 の立ち上げフェーズから、既存プロダクトのリデザインまで、
                チームの状況やリソースに合わせて伴走型で関わります。
              </p>
            </div>

            <div class="grid gap-6 text-sm text-slate-300/80 md:grid-cols-2 pt-4 border-t border-slate-800/50">
              <div class="space-y-2">
                <p class="text-slate-500 font-medium text-xs uppercase tracking-wider">Main Skills</p>
                <p class="leading-relaxed">UI Design, UX, Design System, Prototyping, Branding</p>
              </div>
              <div class="space-y-2">
                <p class="text-slate-500 font-medium text-xs uppercase tracking-wider">Tools</p>
                <p class="leading-relaxed">Figma, Illustrator, Photoshop, Framer, Notion</p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <p class="text-slate-500 font-medium text-xs uppercase tracking-wider">Strength</p>
            <ul class="space-y-3 text-sm text-slate-300/80">
              <li class="flex items-start gap-3">
                <span class="text-indigo-400 mt-1">▸</span>
                <span>プロダクトの文脈やビジネスゴールからデザインを考えること</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-indigo-400 mt-1">▸</span>
                <span>エンジニアとスムーズにコミュニケーションしながら進めること</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-indigo-400 mt-1">▸</span>
                <span>ブランドとUIを一貫したトーンで設計すること</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Contact セクション -->
      <section id="contact" class="bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div class="mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-6">
          <div class="space-y-3">
            <h2 class="text-2xl md:text-4xl font-bold tracking-tight">Contact</h2>
            <p class="text-base text-slate-300/90 max-w-2xl leading-relaxed">
              お仕事の相談・ご質問などありましたら、以下からご連絡ください。
              案件の概要やスケジュール感を添えていただけるとスムーズです。
            </p>
          </div>

          <div class="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:keisekuchi18@gmail.com"
              class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-100 to-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              メールで連絡する
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-slate-100 hover:border-slate-600 hover:bg-slate-800/50 active:scale-95 transition-all duration-300"
            >
              Notion / 詳細プロフィール（仮）
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
      <div class="mx-auto max-w-6xl px-6 py-6 text-xs text-slate-500/60 flex items-center justify-between">
        <span>© {{ new Date().getFullYear() }} K / Designer</span>
        <span>Built with Vue 3 & Tailwind CSS v4</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
const works = [
  {
    id: 1,
    title: 'SaaS ダッシュボード UI',
    category: 'PRODUCT UI',
    description: 'BtoB SaaS の管理画面 UI をフルリデザイン。情報量の多い画面でも迷わず使える情報設計と、落ち着いたカラートーンでブランドらしさを表現しました。',
    tags: ['Web App', 'Design System', 'Dashboard'],
    gradient: 'from-indigo-500 via-sky-500 to-emerald-400',
  },
  {
    id: 2,
    title: 'スタートアップ コーポレートサイト',
    category: 'WEB / BRANDING',
    description: 'シリーズA のタイミングでブランド刷新を担当。ロゴ・キービジュアル・Webサイトまで一貫して制作し、採用・営業の両方で使えるデザインに。',
    tags: ['Branding', 'Landing Page'],
    gradient: 'from-fuchsia-500 via-pink-500 to-amber-400',
  },
  {
    id: 3,
    title: 'モバイルアプリ UI キット',
    category: 'MOBILE UI',
    description: 'デザイナー・エンジニア共通で使える Figma の UI コンポーネントライブラリを構築。デザインスピードと UI 品質の両方を向上させました。',
    tags: ['Design System', 'Figma'],
    gradient: 'from-emerald-500 via-teal-400 to-sky-400',
  },
]
</script>
