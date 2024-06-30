export interface User {
  id: number
  avatar: string
  name: string
  phone: string
  email: string
  firstname: string
  lastname: string
  surname: string
  hide_phone: boolean
  position: string
  birthdate: string
  department: Department
  manager: Manager
}

interface Department {
  id: number
  description: string
  title: string
}

interface Manager {
  id: number
  firstname: string
  lastname: string
  surname: string
}
