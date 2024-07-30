import type { User } from '@/types/User'
import type { News } from '@/types/news/News'
import type { Blog } from '@/types/Blog'
import type { Page } from '@/types/AdditionalPage'

export interface Search {
  users: User[]
  pages: Page[]
  news: News[]
  articles: Blog[]
}
