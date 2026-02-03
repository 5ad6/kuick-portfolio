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
            <img :src="work.image" :alt="work.title" class="w-full h-auto rounded-3xl" />
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

          <div class="grid gap-4 md:grid-cols-3">
            <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
              <p class="text-base text-slate-400">担当</p>
              <p class="mt-2 text-base text-slate-200 leading-relaxed">
                UXリサーチ &amp; デザイン / ビジュアルデザイン
              </p>
            </div>
            <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
              <p class="text-base text-slate-400">業界</p>
              <p class="mt-2 text-base text-slate-200 leading-relaxed">音楽</p>
            </div>
            <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
              <p class="text-base text-slate-400">期間</p>
              <p class="mt-2 text-base text-slate-200 leading-relaxed">2023年6月 - 8月</p>
            </div>
          </div>
          <div class="mt-2">
            <img
              src="/uiux-design/liveticks/finaldesignimage.png"
              alt="Liveticks Final Design"
              class="w-full h-auto rounded-2xl"
            />
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

          <div class="animate-slide-up" style="animation-delay: 0.7s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">課題</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              多くの音楽ファン（私自身も含む）は、好きなアーティストのツアー日程を把握できていなかったり、
              直前になって気づいたりすることで、ライブに行く機会を逃してしまうことが多い。
              既存のチケットサービスは、この「忘れやすさ／気づきにくさ」に十分対応できておらず、
              その結果、チャンスを逃すことによるフラストレーションが生まれている。
              このケーススタディでは、ユーザーが好きなアーティストのライブ情報と確実に出会い、
              スムーズにチケット予約まで到達できる体験をデザインすることに焦点を当てた。
            </p>
          </div>

          <div class="animate-slide-up" style="animation-delay: 0.8s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">デザインプロセス</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              Design Thinking のプロセス（Empathize / Define / Ideate / Prototype / Test）に沿って、
              ユーザーのニーズや痛みを明らかにし、アイデアの妥当性を検証しながら、
              ライブ体験を中心にしたユーザー体験へと反復的に改善を行った。
            </p>
          </div>

          <div class="animate-slide-up" style="animation-delay: 0.9s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">ユーザーペルソナ</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              インタビューやアンケートなどの調査結果をもとに、コンサート参加者の目標・行動・課題を
              具体的に表現するためのペルソナを作成した。
            </p>
            <div class="mt-6 grid gap-4">
              <img
                src="/uiux-design/liveticks/persona1.svg"
                alt="Liveticks Persona 1"
                class="w-full h-auto rounded-2xl"
              />
              <img
                src="/uiux-design/liveticks/persona2.svg"
                alt="Liveticks Persona 2"
                class="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div class="animate-slide-up" style="animation-delay: 1.0s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">ユーザージャーニー</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              ライブの発見からチケット購入、そして参加後の体験までを時系列で可視化し、
              途中で発生する摩擦や、体験価値を高められる機会を明らかにした。
            </p>
            <div class="mt-6">
              <img
                src="/uiux-design/liveticks/userjourney.svg"
                alt="Liveticks User Journey"
                class="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div class="animate-slide-up" style="animation-delay: 1.1s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">アフィニティマップ</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              リサーチで得た情報を整理・分類し、ユーザーの本質的なニーズや、
              具体的に取り組むべきデザイン課題を抽出した。
            </p>
            <div class="mt-6">
              <img
                src="/uiux-design/liveticks/affinitymap.svg"
                alt="Liveticks Affinity Map"
                class="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div class="animate-slide-up" style="animation-delay: 1.2s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">ラフスケッチ / 紙ワイヤーフレーム</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              ブレインストーミングやストーリーボード、クレイジーエイトなどを用いて、
              多様なアイデアを広げ、解決策の方向性を探った。
            </p>
            <div class="mt-6">
              <img
                src="/uiux-design/liveticks/roughsketch.png"
                alt="Liveticks Rough Sketch"
                class="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div class="animate-slide-up" style="animation-delay: 1.3s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">情報設計（IA）</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              収集した情報を整理し、ユーザーが迷わずイベントやチケット情報に到達できるよう、
              コンテンツ構造と導線を設計した。
            </p>
            <div class="mt-6">
              <img
                src="/uiux-design/liveticks/informationarchitecture.png"
                alt="Liveticks Information Architecture"
                class="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div class="animate-slide-up" style="animation-delay: 1.4s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">ワイヤーフレーム &amp; プロトタイピング</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              ペーパーワイヤーとラフスケッチをもとにデジタルワイヤーを作成し、
              複数の機能を試作してユーザーテストに備えた。
            </p>
            <div class="mt-6">
              <img
                src="/uiux-design/liveticks/wireframe.png"
                alt="Liveticks Wireframe"
                class="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div class="animate-slide-up" style="animation-delay: 1.5s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">ユーザビリティテスト</h2>
            <p class="text-base leading-relaxed" style="color: rgba(255, 250, 255, 0.8);">
              同僚を対象にモデレート形式のテストを実施し、
              得られたフィードバックをアフィニティダイアグラムで整理して改善に活用した。
            </p>
          </div>

          <div class="animate-slide-up" style="animation-delay: 1.6s;">
            <h2 class="text-xl font-semibold mb-4" style="color: #FFFAFF;">最終デザイン</h2>
            <ul class="space-y-2 text-base text-slate-200 list-disc list-inside">
              <li>Apple Music / Spotify に近いデザインを採用し、学習コストを下げた。</li>
              <li>アーティスト/会場のスケジュールを一覧で把握し、フォローや通知で見逃しを防ぐ。</li>
              <li>イベント詳細ページで必要な情報を整理し、スムーズに購入へ進める設計。</li>
              <li>ジャンル・場所・日付でのフィルターに加え、アーティスト/会場/イベントの検索を支援。</li>
            </ul>
            <div class="mt-6 grid gap-4 md:grid-cols-2">
              <img
                src="/uiux-design/liveticks/finaldesign1.png"
                alt="Liveticks Final Design 1"
                class="w-full h-auto rounded-2xl"
              />
              <img
                src="/uiux-design/liveticks/finaldesign2.png"
                alt="Liveticks Final Design 2"
                class="w-full h-auto rounded-2xl"
              />
              <img
                src="/uiux-design/liveticks/finaldesign3.png"
                alt="Liveticks Final Design 3"
                class="w-full h-auto rounded-2xl"
              />
              <img
                src="/uiux-design/liveticks/finaldesign4.png"
                alt="Liveticks Final Design 4"
                class="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { works } from '../../data/works.js'

const work = computed(() => {
  return works.find(w => w.slug === 'liveticks')
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

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>