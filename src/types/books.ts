export interface BookItem {
  author: string
  bookUrl: string
  canUpdate: boolean
  coverUrl: string
  customCoverUrl: string
  durChapterIndex: number
  durChapterPos: number
  durChapterTime: number
  durChapterTitle: string
  group: number
  intro: string
  kind: string
  lastCheckCount: number
  lastCheckTime: number
  latestChapterTime: number
  latestChapterTitle: string
  name: string
  order: number
  origin: string
  originName: string
  originOrder: number
  readConfig: { delTag: number; reSegment: boolean; reverseToc: boolean; splitLongChapter: boolean }
  tocUrl: string
  totalChapterNum: number
  type: number
  variable: string
  wordCount: string
}
