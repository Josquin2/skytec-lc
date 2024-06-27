import type { User } from '@/types/User'
import type { Category } from '@/types/news/Category'
import type { Comment } from '@/types/Comment'

export interface News {
  id: number
  category: Category
  content: string
  created_at: string
  news_category_id: number
  slug: string
  title: string
  user: User
  user_id: number
  comments: Comment[]
}

export interface Emoji {
  id: number
  slug: string
  image: string
}
