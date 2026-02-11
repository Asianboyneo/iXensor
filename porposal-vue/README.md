# 安盛生科 iXensor 提案書 — Vue 3 + TypeScript + Tailwind CSS

以 **Vue 3**（Composition API + `<script setup>`）、**TypeScript** 邏輯與 **Tailwind CSS** 優雅樣式建構的提案單頁。

## 技術架構

| 層級 | 說明 |
|------|------|
| **Vue 3** | Composition API、`<script setup lang="ts">`、單檔元件 |
| **TypeScript** | 型別定義（`types/proposal.ts`）、資料層型別安全、`formatAmount()` 等邏輯 |
| **Tailwind CSS v4** | 主題色（cream / charcoal / accent）、響應式、utility-first 樣式 |

## 專案結構

```
porposal-vue/
├── src/
│   ├── types/
│   │   └── proposal.ts      # 型別：Milestone, Phase, ServicePackage, ProposalNote, ProposalData
│   ├── data/
│   │   └── proposal.ts      # 提案資料（proposalData）、常數（PROPOSAL_META, PROPOSAL_TOTAL_AMOUNT）
│   ├── App.vue              # 主頁：引入資料 + 型別安全的模板
│   ├── style.css            # Tailwind 入口、CSS 變數、@theme、區塊標籤等
│   ├── main.ts
│   └── env.d.ts
├── index.html
├── vite.config.ts           # Vite + Vue + Tailwind + @ 路徑別名
├── tsconfig.json
└── package.json
```

## 設計變數（Tailwind 主題）

- **cream**：背景 `#faf8f5`
- **charcoal**：主文字 `#1c1c1c`
- **muted / soft**：次要文字
- **accent / accent-light**：酒紅重點色
- **border / card**：邊框與卡片底

區塊標題使用 `.section-label`（小寫大寫 + 字距），標題字體為 Cormorant Garamond（serif）。

## 開發與建置

```bash
cd porposal-vue
npm install
npm run dev
```

```bash
npm run build
npm run preview
```
