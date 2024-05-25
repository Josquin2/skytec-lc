export interface News {
  category: Category
  content: string
  created_at: string
  news_category_id: number
  title: string
  user: User
  user_id: number
}

interface Category {
  id: number
  slug: string
  title: string
}

interface User {
  avatar: string
  id: number
  name: string
}