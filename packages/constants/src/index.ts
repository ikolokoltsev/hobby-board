import type { TMediatype, TStatus } from '@app/types'

export const STATUS_LABELS: Record<TStatus, string> = {
  wish: 'Wish',
  progress: 'In Progress',
  done: 'Done'
}

export const TYPE_LABELS: Record<TMediatype, string> = {
  movie: 'Movie',
  series: 'Series',
  game: 'Game',
  book: 'Book',
  anime: 'Anime'
}
