<script setup lang="ts">
import { BACKGROUND_IMAGES, BACKGROUND_POSITION } from '@/config/backgrounds'
import { proposalData } from '@/data/proposal'
import { PROPOSAL_META, PROPOSAL_TOTAL_AMOUNT } from '@/data/proposal'

const { milestones, phases, packages, notes } = proposalData

function formatAmount(value: number): string {
  return value.toLocaleString('zh-TW')
}
</script>

<template>
  <div class="proposal-page min-h-screen bg-page text-ink">
    <!-- Hero（可替換背景圖：public/images/hero-bg.svg 或 .jpg） -->
    <header
      class="section-bg border-b border-border"
      :style="{ '--bg-image': `url(${BACKGROUND_IMAGES.hero})`, '--bg-position': BACKGROUND_POSITION.hero ?? 'center' }"
    >
      <div class="section-bg-overlay" aria-hidden="true" />
      <div class="section-bg-content mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
        <p class="section-label mb-8">敬呈客戶</p>
        <h1 class="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          安盛生科 iXensor
        </h1>
        <p class="mt-4 text-xl text-white sm:text-2xl">
          {{ PROPOSAL_META.subtitle }}
        </p>
        <dl class="mt-12 flex flex-wrap gap-x-12 gap-y-2 text-sm">
          <div>
            <dt class="text-white">專案對象</dt>
            <dd class="mt-0.5 font-medium text-ink">{{ PROPOSAL_META.client }}</dd>
          </div>
          <div>
            <dt class="text-white">執行期</dt>
            <dd class="mt-0.5 font-medium text-ink">{{ PROPOSAL_META.period }}</dd>
          </div>
        </dl>
      </div>
    </header>

    <!-- Goals -->
    <section class="border-b border-border bg-white px-6 py-16 sm:px-8">
      <div class="mx-auto max-w-3xl">
        <h2 class="section-label mb-6">專案目標</h2>
        <p class="max-w-2xl text-muted leading-relaxed">
          確保陳董事長於四檔指標性節目的產出符合
          <span class="font-medium text-ink">商業目的</span>、
          <span class="font-medium text-ink">個人形象</span>與
          <span class="font-medium text-ink">合規標準</span>
          ，協助「安盛生科」團隊與 FM Taiwan 及節目組的溝通。
        </p>
      </div>
    </section>

    <!-- Milestones -->
    <section class="border-b border-border bg-white px-6 py-16 sm:px-8">
      <div class="mx-auto max-w-3xl">
        <h2 class="section-label mb-2">一、專案執行時程</h2>
        <p class="mb-12 text-soft text-sm">
          Milestones · 本專案包含四場關鍵節目的全流程經紀
        </p>

        <ul class="divide-y divide-border">
          <li
            v-for="(item, i) in milestones"
            :key="i"
            class="flex flex-col gap-4 py-10 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-14"
          >
            <div class="flex items-center gap-4 sm:w-24 sm:shrink-0">
              <span class="font-mono text-xl font-medium text-ink sm:text-lg">{{ item.date }}</span>
              <span class="hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-lg font-semibold text-ink">{{ item.title }}</h3>
              <p class="mt-1 text-sm font-medium text-accent-light">{{ item.focus }}</p>
              <p class="mt-3 text-sm leading-relaxed text-muted">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Service Scope（背景圖：public/images/section-bg-1.svg） -->
    <section
      class="section-bg border-b border-border px-6 py-16 sm:px-8"
      :style="{ '--bg-image': `url(${BACKGROUND_IMAGES.serviceScope})`, '--bg-position': BACKGROUND_POSITION.serviceScope ?? 'center' }"
    >
      <div class="section-bg-overlay" aria-hidden="true" />
      <div class="section-bg-content mx-auto max-w-3xl">
        <h2 class="section-label mb-10">二、服務範疇與核心價值</h2>

        <div class="grid gap-6 sm:grid-cols-2">
          <article
            v-for="(phase, i) in phases"
            :key="i"
            class="rounded-lg border border-border bg-white p-6"
          >
            <div class="mb-4 flex flex-wrap items-center gap-3">
              <span class="text-xs font-semibold uppercase tracking-wider text-soft">
                {{ phase.phase }}
              </span>
              <h3 class="text-lg font-semibold text-ink">{{ phase.title }}</h3>
            </div>
            <ul class="space-y-3">
              <li
                v-for="(bullet, j) in phase.items"
                :key="j"
                class="text-sm leading-relaxed text-muted"
              >
                {{ bullet }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Service Packages -->
    <section class="border-b border-border bg-white px-6 py-16 sm:px-8">
      <div class="mx-auto max-w-3xl">
        <h2 class="section-label mb-2">三、專案服務模組選擇</h2>
        <p class="mb-10 text-soft text-sm">
          Service Packages · 為確保專案品質並節省貴司行政對接成本，經紀顧問提供以下模組化選擇。加值項目（A、B、C）將根據貴司需求等級（如：標準/資深）另行報價
        </p>

        <div class="overflow-hidden rounded-lg border border-border bg-white">
          <ul class="divide-y divide-border">
            <li
              v-for="(pkg, i) in packages"
              :key="i"
              class="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:gap-10"
            >
              <span class="w-28 shrink-0 font-semibold text-ink">{{ pkg.name }}</span>
              <div class="min-w-0 flex-1">
                <p class="font-medium text-ink">{{ pkg.content }}</p>
                <p class="mt-0.5 text-sm text-soft">{{ pkg.desc }}</p>
              </div>
            </li>
          </ul>
        </div>

        <p class="mt-6 text-sm text-soft">
          備註：加值項目旨在節省貴司「尋人、比價、溝通、監管」之時間成本，所有外部協力廠商之選定，最終仍由貴司依報價核可後執行。
        </p>
      </div>
    </section>

    <!-- Notes（背景圖：public/images/section-bg-2.svg） -->
    <section
      class="section-bg border-b border-border px-6 py-16 sm:px-8"
      :style="{ '--bg-image': `url(${BACKGROUND_IMAGES.notes})`, '--bg-position': BACKGROUND_POSITION.notes ?? 'center' }"
    >
      <div class="section-bg-overlay" aria-hidden="true" />
      <div class="section-bg-content mx-auto max-w-3xl">
        <h2 class="section-label mb-10">四、專案備註與責任界定</h2>

        <ul class="space-y-4">
          <li
            v-for="(note, i) in notes"
            :key="i"
            class="rounded-lg border border-border bg-white p-5"
          >
            <span class="font-medium text-ink">{{ note.label }}</span>
            <span class="text-muted">{{ note.text }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- CTA -->
    <footer class="bg-white px-6 py-20 sm:px-8">
      <div class="mx-auto max-w-3xl">
        <div class="rounded-lg border border-border bg-page px-6 py-12 text-center sm:px-12">
          <p class="section-label">專案總額</p>
          <p class="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            NT$ {{ formatAmount(PROPOSAL_TOTAL_AMOUNT) }}
          </p>
          <p class="mt-4 text-sm text-soft">未稅 · 一站式經紀顧問服務</p>
        </div>
      </div>
    </footer>
  </div>
</template>
