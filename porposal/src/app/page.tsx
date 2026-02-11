"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { id: "section-1", label: "專案執行內容" },
  { id: "section-2", label: "服務範疇核心" },
  { id: "section-3", label: "專案服務選擇" },
  { id: "section-quote", label: "報價明細" },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      {/* 目錄觸發按鈕：收合時只顯示此按鈕 */}
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="fixed right-0 top-1/2 z-40 -translate-y-1/2 rounded-l-lg border border-r-0 border-white/[0.08] bg-black/20 px-2 py-4 text-xs font-medium text-zinc-400 backdrop-blur-md transition-colors hover:bg-black/40 hover:text-violet-300"
        aria-label="開啟目錄"
      >
        目錄
      </button>

      {/* 點擊背板關閉 */}
      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40"
          aria-label="關閉目錄"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* 浮動透明菜單（與先前樣式一致） */}
      <nav
        className={`fixed right-4 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-2 rounded-xl border border-white/[0.08] bg-black/20 px-3 py-3 backdrop-blur-md transition-opacity duration-200 ${
          menuOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
        }`}
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleNavClick(id)}
            className="rounded-lg px-3 py-2 text-left text-sm font-medium text-zinc-400 transition-colors hover:bg-white/[0.08] hover:text-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-indigo-500/[0.06]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            敬呈客戶
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="gradient-text">安盛生科</span> iXensor
          </h1>
          <p className="mt-3 text-xl text-zinc-400 sm:text-2xl">
            媒體影響力與高階主管專案協助
          </p>
          <div className="mt-10 flex flex-wrap gap-8 text-sm">
            <div>
              <span className="text-zinc-500">專案對象</span>
              <p className="mt-0.5 font-medium">安盛生科（iXensor）</p>
            </div>
            <div>
              <span className="text-zinc-500">執行期</span>
              <p className="mt-0.5 font-medium">四檔節目專案</p>
            </div>
          </div>
        </div>
      </header>

      {/* Goals */}
      <section className="border-b border-white/[0.08] px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-violet-400">
            專案目標
          </h2>
          <div className="space-y-4 text-zinc-300">
            <p className="leading-relaxed">
              確保陳董事長於四檔指標性節目的產出符合
              <span className="text-white">商業目的</span>、
              <span className="text-white">個人形象</span>與
              <span className="text-white">合規標準</span>
              ，協助「安盛生科」團隊與 FM Taiwan 及節目組的溝通。
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section id="section-1" className="scroll-mt-6 border-b border-white/[0.08] px-6 py-16 sm:px-8 sm:scroll-mt-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-sm font-medium uppercase tracking-wider text-violet-400">
            一、專案執行時程 Milestones
          </h2>
          <p className="mb-12 text-zinc-400">本專案包含四場關鍵節目的全流程經紀</p>

          <div className="space-y-0">
            {[
              {
                shootDate: "3/23",
                releaseDate: "4/23",
                title: "風傳媒 《下班經濟學》",
                focus: "首場策略性亮相，定調雙領域權威形象。",
                desc: "作為專案的首場重要發布，目標在於精準建立陳董事長在「財經投資」與「健康醫療科技」雙領域的專業領袖地位。透過深入淺出的內容設計，向潛在投資人與大眾傳遞安盛生科的研發價值，為後續系列宣傳奠定高格局的專業基調。",
                tags: ["#投資理財", "#時事財經", "#生活理財"],
              },
              {
                shootDate: "3/9 ~ 3/13",
                releaseDate: "4/9",
                title: "《業問 行業的哉問》",
                focus: "深化產業洞察，確保商業論述精準轉譯。",
                desc: "鎖定垂直產業的高端受眾，進一步強化安盛生科在生技產業鏈中的深度洞察。透過精確的商業語意轉譯，將複雜的技術優勢轉化為清晰的商機動能，協助董事長在訪談中掌握對話主導權，實現與利害關係人的精準對接。",
                tags: ["#生活日常", "#生人經驗", "#人物訪談"],
              },
              {
                shootDate: "3/16 ~ 3/20",
                releaseDate: "4/13",
                title: "《博音》",
                focus: "高節奏現場應對，強化模擬演練與心理建設。",
                desc: "針對該節目高頻率、快節奏且具隨機挑戰的訪談特質，進行高強度的實戰模擬演練。協助董事長在維持幽默感與親和力的同時，精準守住企業核心立場，透過壓力測試與反應訓練，展現睿智且不失穩重的高階管理者風範。",
                tags: ["#喜劇知識", "#社會觀察", "#領域專家訪談"],
              },
              {
                date: "未確定",
                title: "《吳淡如人生實用商學院》",
                focus: "專案總結場次，聚焦商業邏輯梳理與品牌調性最終校準。",
                desc: "作為系列專案的壓軸場次，重點在於將安盛生科的品牌願景與市場實務邏輯進行深度融合。透過吳淡如老師具備廣大影響力的商學視角，將企業核心價值轉化為具備「長尾效應」的品牌資產，確保專案收尾時品牌形象的高度統一與延續。",
                tags: ["#商業趨勢", "#投資理財", "#企業管理"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col gap-4 border-b border-white/[0.06] py-8 last:border-0 sm:flex-row sm:items-start sm:gap-12"
              >
                <div className="flex items-center gap-4 sm:w-32 sm:shrink-0">
                  {"shootDate" in item && item.releaseDate ? (
                    <div className="flex flex-col gap-1 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">拍攝</span>
                        <span className="text-sm font-semibold text-violet-400">{item.shootDate}</span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">上片</span>
                        <span className="text-sm font-semibold text-violet-400">{item.releaseDate}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                      <span className="text-lg font-semibold text-violet-400">{(item as { date?: string }).date}</span>
                    </div>
                  )}
                  <span className="hidden h-px flex-1 bg-white/[0.08] sm:block" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">{item.title}</h3>
                  {"tags" in item && item.tags?.length ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((tag: string, j: number) => (
                        <span key={j} className="rounded-full bg-white/10 px-3 py-0.5 text-xs text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <p className="mt-1 text-sm font-medium text-violet-300/90">{item.focus}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Scope */}
      <section id="section-2" className="scroll-mt-6 border-b border-white/[0.08] px-6 py-16 sm:px-8 sm:scroll-mt-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-sm font-medium uppercase tracking-wider text-violet-400">
            二、服務範疇與核心價值
          </h2>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                title: "策略開發與目標錨定",
                items: [
                  "品牌人設深度梳理：緊扣安盛生科商業目標，研析陳董事長特質與各節目受眾偏好，確保溝通內容的高度一致性。",
                  "溝通樞紐與資訊過濾：擔任安盛與 FM Taiwan 間的單一窗口。協助 IR（投資人關係）部門篩選內部資料，預先排除敏感內容，提升與製作組的對接效率。",
                ],
              },
              {
                phase: "Phase 2",
                title: "內容轉譯與風險防線",
                items: [
                  "企業立場的溝通轉譯者：全程參與製播會議，代表安盛生科立場發聲。對內提供媒體實務建議以優化內容；對外協助團隊過濾製作端不合理要求，化解執行風險。",
                  "實戰壓力測試：針對錄影現場可能的尖銳提議或敏感追問進行模擬演練，協助董事長調整語氣、節奏與應對策略，確保表現專業且從容。",
                ],
              },
              {
                phase: "Phase 3",
                title: "現場執行與影像管理",
                items: [
                  "錄影現場執行總控：包含鏡頭形象（妝髮維護）督導、董事長情緒穩定引導、錄製節奏微調，確保現場產出最高品質。",
                  "內部優化復盤：提供非公開之側錄紀錄，供安盛內部團隊針對董事長表現進行後續優化參考。",
                ],
              },
              {
                phase: "Phase 4",
                title: "流程監管與品牌合規",
                items: [
                  "合規審核流程協助：在成品上架前，負責將剪輯版本提交予安盛內部法務及 IR 部門審核。協助追蹤審核進度，並監督製作團隊落實內部專業人員之指示，確保成品符合合規要求。",
                  "行銷視覺精準同步：統籌 YouTube/Podcast 社群宣傳圖文，提交予安盛指定窗口進行最終確認，確保視覺形象與品牌語境一致。",
                ],
              },
            ].map((phase, i) => (
              <div
                key={i}
                className="glass-card rounded-xl border border-white/[0.08] p-6 transition-colors hover:border-white/[0.12]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-md bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-300">
                    {phase.phase}
                  </span>
                  <h3 className="font-semibold text-white">{phase.title}</h3>
                </div>
                <ul className="space-y-4">
                  {phase.items.map((item, j) => (
                    <li key={j} className="text-sm leading-relaxed text-zinc-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="section-3" className="scroll-mt-6 border-b border-white/[0.08] px-6 py-16 sm:px-8 sm:scroll-mt-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-violet-400">
            三、專案服務模組選擇 Service Packages
          </h2>
          <p className="mb-10 text-sm text-zinc-400">
            為確保專案品質並節省貴司行政對接成本，經紀顧問提供以下模組化選擇。將根據貴司需求等級（如：標準/資深）另行報價
          </p>

          <div className="overflow-hidden rounded-xl border border-white/[0.08]">
            <div className="divide-y divide-white/[0.06]">
              {[
                { title: "核心顧問服務", desc: "包含上述 Phase 1-4 所有專業輔佐服務。" },
                { title: "核心服務 + 妝髮對接", desc: "經紀人負責開發、篩選合適妝髮師並統籌現場執行。" },
                { title: "核心服務 + 造型規劃", desc: "經紀人對接專業造型資源，針對節目調性提供形象穿搭建議。" },
                { title: "核心服務 + 媒體培訓", desc: "經紀人引薦並安排資深媒體導師，進行深度對口訓練。" },
              ].map((pkg, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 bg-white/[0.02] px-6 py-5 transition-colors hover:bg-white/[0.04]"
                >
                  <p className="font-medium text-white">{pkg.title}</p>
                  <p className="text-sm text-zinc-500">{pkg.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            備註：加值項目旨在節省貴司「尋人、比價、溝通、監管」之時間成本，所有外部協力廠商之選定，最終仍由貴司依報價核可後執行。
          </p>

          {/* 報價明細 */}
          <div id="section-quote" className="mt-12 scroll-mt-24">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-violet-400">
              報價明細
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/[0.08]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.04]">
                    <th className="px-4 py-3 font-medium text-zinc-300">項目</th>
                    <th className="px-4 py-3 font-medium text-zinc-300">說明</th>
                    <th className="px-4 py-3 font-medium text-zinc-300 text-right">金額 (TWD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr className="bg-white/[0.02]">
                    <td className="px-4 py-3 text-white">核心顧問服務 (Phase 1-4)</td>
                    <td className="px-4 py-3 text-zinc-400">專案顧問專屬服務，含 4 場節目全流程執行。</td>
                    <td className="px-4 py-3 text-violet-300 text-right">$150,000</td>
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="px-4 py-3 text-white">妝髮梳化</td>
                    <td className="px-4 py-3 text-zinc-400">4 場定點妝髮</td>
                    <td className="px-4 py-3 text-violet-300 text-right">$15,000</td>
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="px-4 py-3 text-white">口播培訓顧問</td>
                    <td className="px-4 py-3 text-zinc-400">1 場專業口播訓練與資料整理。</td>
                    <td className="px-4 py-3 text-violet-300 text-right">$25,000</td>
                  </tr>
                  <tr className="border-t-2 border-white/[0.1] bg-white/[0.06]">
                    <td className="px-4 py-4 font-medium text-white">總計</td>
                    <td className="px-4 py-4 text-zinc-400"></td>
                    <td className="px-4 py-4 text-right">
                      <span className="font-semibold text-violet-300">$190,000</span>
                      <span className="ml-1.5 text-xs font-normal text-zinc-500">（未稅）</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Notes & Responsibility */}
      <section className="border-b border-white/[0.08] px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-sm font-medium uppercase tracking-wider text-violet-400">
            專案備註與責任界定
          </h2>

          <div className="space-y-6 text-sm text-zinc-400">
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
              <span className="font-medium text-zinc-300">最終決策權：</span>
              經紀顧問團隊擔任輔佐與執行角色，專案之所有決策、內容發表、視覺產出，最終決定權與法律責任均歸屬於「安盛生科」。
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
              <span className="font-medium text-zinc-300">合規免責說明：</span>
              凡涉及公司資訊披露、IR 投資人關係、生技醫療法規等專業內容，其最終審核權與合規擔保由安盛生科內部法務/IR 部門負責。經紀顧問負責流程對接，不承擔內容合規之法律責任。
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
              <span className="font-medium text-zinc-300">一站式統籌服務：</span>
              若選用加值模組，所有第三方服務（造型、妝髮、培訓）之篩選、溝通、發包與現場監督均由經紀顧問負責，確保服務品質與專案目標對齊。
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
              <span className="font-medium text-zinc-300">行政與實報實銷：</span>
              專案執行產生之額外必要支出（如：跨縣市車馬費、緊急採買項目）採實報實銷。除前述經貴司核可之包套服務外，不產生任何隱藏費用。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
