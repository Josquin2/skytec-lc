import type { User } from '@/types/User'

export interface Structure {
  title: string
  department_head: User
  users: User[]
  id: number
}
