<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <!-- ナビバー -->
    <header class="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div class="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-2">
          <div class="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400" />
          <span class="text-sm font-semibold tracking-wide uppercase text-slate-200">
            K DESIGN
          </span>
        </div>
        <nav class="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#works" class="hover:text-white transition">Works</a>
          <a href="#about" class="hover:text-white transition">About</a>
          <a href="#contact" class="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <!-- ヒーロー -->
      <section
        class="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
      >
        <div class="mx-auto max-w-5xl px-4 py-16 md:py-24 grid md:grid-cols-[2fr,1.4fr] gap-10">
          <!-- テキスト -->
          <div class="space-y-6">
            <p class="text-xs font-semibold tracking-[0.25em] text-indigo-400 uppercase">
              PRODUCT DESIGNER / UI &amp; BRANDING
            </p>
            <h1 class="text-3xl md:text-5xl font-semibold leading-tight">
              デジタルとブランドの
              <span class="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                つながり
              </span>
              をデザインします。
            </h1>
            <p class="text-sm md:text-base text-slate-300 leading-relaxed">
              プロダクトの使いやすさから、ビジュアルアイデンティティまで。
              サービスの「らしさ」を見つけて、UI デザインとブランド表現に落とし込むことが得意です。
            </p>

            <div class="flex flex-wrap gap-3">
              <a
                href="#works"
                class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-900 shadow-lg shadow-indigo-500/20 hover:bg-white active:scale-95 transition"
              >
                作品を見る
              </a>
              <a
                href="#contact"
                class="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800/70 active:scale-95 transition"
              >
                お仕事の相談をする
              </a>
            </div>

            <div class="flex flex-wrap gap-4 text-xs text-slate-400">
              <span class="inline-flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-400" /> フリーランス受付中
              </span>
              <span>Figma / Web / App / Branding</span>
            </div>
          </div>

          <!-- プロフィールカード -->
          <div class="flex items-center md:justify-end">
            <div class="w-full max-w-xs rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-indigo-950/50 space-y-4">
              <div class="flex items-center gap-3">
                <div class="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400" />
                <div>
                  <p class="text-sm font-semibold">K / Designer</p>
                  <p class="text-xs text-slate-400">Tokyo, Japan</p>
                </div>
              </div>
              <div class="flex gap-4 text-xs">
                <div>
                  <p class="text-slate-400">Experience</p>
                  <p class="text-sm font-semibold">5+ yrs</p>
                </div>
                <div>
                  <p class="text-slate-400">Projects</p>
                  <p class="text-sm font-semibold">30+</p>
                </div>
                <div>
                  <p class="text-slate-400">Satisfaction</p>
                  <p class="text-sm font-semibold">98%</p>
                </div>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                SaaS・スタートアップを中心に、プロダクトデザインとブランドを一貫してサポートしています。
              </p>
              <div class="flex gap-2 text-xs text-slate-300 flex-wrap">
                <span class="rounded-full bg-slate-800 px-3 py-1">UI Design</span>
                <span class="rounded-full bg-slate-800 px-3 py-1">Design System</span>
                <span class="rounded-full bg-slate-800 px-3 py-1">Branding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Works セクション -->
      <section id="works" class="border-b border-slate-800 bg-slate-900">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-6">
          <div class="flex items-end justify-between gap-4">
            <div>
              <h2 class="text-xl md:text-2xl font-semibold">Selected Works</h2>
              <p class="text-sm text-slate-400 mt-1">
                プロダクト UI・ブランドサイト・ロゴなど、最近の案件をピックアップしました。
              </p>
            </div>
            <p class="hidden text-xs text-slate-500 md:block">
              ※ 実案件に差し替えるだけでポートフォリオとして使えます
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <article
              v-for="work in works"
              :key="work.id"
              class="group cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-slate-600 transition"
            >
              <div
                class="h-40 bg-gradient-to-br"
                :class="work.gradient"
              />
              <div class="space-y-2 p-4">
                <p class="text-xs font-medium text-indigo-300 uppercase tracking-wide">
                  {{ work.category }}
                </p>
                <h3 class="text-sm font-semibold group-hover:text-white">
                  {{ work.title }}
                </h3>
                <p class="text-xs text-slate-400 line-clamp-2">
                  {{ work.description }}
                </p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    v-for="tag in work.tags"
                    :key="tag"
                    class="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300"
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
      <section id="about" class="border-b border-slate-800 bg-slate-950">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 grid gap-8 md:grid-cols-[1.3fr,1fr]">
          <div class="space-y-4">
            <h2 class="text-xl md:text-2xl font-semibold">About</h2>
            <p class="text-sm text-slate-300 leading-relaxed">
              プロダクトの体験とブランドの一貫性を大切にしながら、
              「ちゃんと使われ続けるデザイン」を意識して制作しています。
              エンジニアとの協業や、デザインシステムの構築も得意です。
            </p>
            <p class="text-sm text-slate-300 leading-relaxed">
              0→1 の立ち上げフェーズから、既存プロダクトのリデザインまで、
              チームの状況やリソースに合わせて伴走型で関わります。
            </p>

            <div class="grid gap-3 text-xs text-slate-300 md:grid-cols-2">
              <div class="space-y-1">
                <p class="text-slate-400">Main Skills</p>
                <p>UI Design, UX, Design System, Prototyping, Branding</p>
              </div>
              <div class="space-y-1">
                <p class="text-slate-400">Tools</p>
                <p>Figma, Illustrator, Photoshop, Framer, Notion</p>
              </div>
            </div>
          </div>

          <div class="space-y-3 text-xs text-slate-300">
            <p class="text-slate-400">Strength</p>
            <ul class="space-y-1 list-disc list-inside">
              <li>プロダクトの文脈やビジネスゴールからデザインを考えること</li>
              <li>エンジニアとスムーズにコミュニケーションしながら進めること</li>
              <li>ブランドとUIを一貫したトーンで設計すること</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Contact セクション -->
      <section id="contact" class="bg-slate-950">
        <div class="mx-auto max-w-5xl px-4 py-12 md:py-16 space-y-4">
          <h2 class="text-xl md:text-2xl font-semibold">Contact</h2>
          <p class="text-sm text-slate-300">
            お仕事の相談・ご質問などありましたら、以下からご連絡ください。
            案件の概要やスケジュール感を添えていただけるとスムーズです。
          </p>

          <div
            class="mt-4 flex flex-wrap gap-3 text-sm"
          >
            <a
              href="mailto:you@example.com"
              class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2 font-medium text-slate-900 hover:bg-white active:scale-95 transition"
            >
              メールで連絡する
            </a>
            <a
              href="#"
              class="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-2 text-slate-100 hover:bg-slate-800/70 active:scale-95 transition"
            >
              Notion / 詳細プロフィール（仮）
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-800 bg-slate-950">
      <div class="mx-auto max-w-5xl px-4 py-4 text-xs text-slate-500 flex items-center justify-between">
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
