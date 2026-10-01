import type { TMediaType, TStatuses } from '@app/types'

export const STATUS_LABELS: Record<TStatuses, string> = {
  wish: 'Wish',
  progress: 'In Progress',
  done: 'Done'
}

export const TYPE_LABELS: Record<TMediaType, string> = {
  movie: 'Movie',
  series: 'Series',
  game: 'Game',
  book: 'Book',
  anime: 'Anime'
}
