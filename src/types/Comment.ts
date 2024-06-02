import type { User } from '@/types/User'
import type { News } from '@/types/news/News'

export interface Comment {
  id: number
  user: User
  news: News
  comment: string
}
