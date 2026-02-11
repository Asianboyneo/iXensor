/**
 * 背景圖片設定
 * 將圖片放在 public/images/，路徑以 /images/ 開頭即可。
 * 設為 null 則該區塊不顯示背景圖。
 */
export const BACKGROUND_IMAGES = {
  /** Hero 區塊（建議比例 16:9 或更寬，如 1920×600） */
  hero: '/images/hero-bg.jpg',
  /** 二、服務範疇 區塊 */
  serviceScope: '/images/section-bg-1.svg',
  /** 四、備註與責任 區塊 */
  notes: '/images/section-bg-2.svg',
} as const

/**
 * 各區塊背景圖的「上下」對齊位置（可只設要改的）
 * 常用值：'center' | 'center top'（偏上）| 'center bottom'（偏下）| 'center 30%' | 'center 70%'
 */
export const BACKGROUND_POSITION: Partial<Record<keyof typeof BACKGROUND_IMAGES, string>> = {
  hero: 'center 27%',
  serviceScope: 'center',
  notes: 'center',
}

export type BackgroundKey = keyof typeof BACKGROUND_IMAGES
