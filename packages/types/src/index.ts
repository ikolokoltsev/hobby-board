export const MEDIA_TYPES = ['movie', 'series', 'game', 'book', 'anime'] as const
export type TMediaType = (typeof MEDIA_TYPES)[number]

export const STATUSES = ['wish', 'progress', 'done'] as const
export type TStatuses = (typeof STATUSES)[number]

export interface ITitle {
  id: string
  type: TMediaType
  title: string
  year: number | null
  cover: string | null
  status: TStatuses
}
