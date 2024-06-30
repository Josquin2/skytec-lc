import type { User } from '@/types/User'
export interface Blog {
  title: string
  user_id: number
  created_at: string
  content: string
  id: number
  user: User
}
