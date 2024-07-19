import { Api } from '@/api/api'
import axios from 'axios'

export class User extends Api {
  async getUserData(token: string): Promise<any> {
    return await axios.request({
      url: `${this.url}/user`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
  }

  async checkAuth() {
    const token = localStorage.getItem('token')

    if (token) {
      try {
        return await this.getUserData(token)
      } catch (error) {
        return false
      }
    } else {
      return false
    }
  }
}
