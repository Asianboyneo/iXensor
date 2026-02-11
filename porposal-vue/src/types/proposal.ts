/** 專案時程里程碑 */
export interface Milestone {
  date: string
  title: string
  focus: string
  desc: string
}

/** 服務階段（Phase） */
export interface Phase {
  phase: string
  title: string
  items: readonly string[]
}

/** 服務方案 */
export interface ServicePackage {
  name: string
  content: string
  desc: string
}

/** 備註與責任條款 */
export interface ProposalNote {
  label: string
  text: string
}

/** 提案頁面資料聚合 */
export interface ProposalData {
  milestones: readonly Milestone[]
  phases: readonly Phase[]
  packages: readonly ServicePackage[]
  notes: readonly ProposalNote[]
}
