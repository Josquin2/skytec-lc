import axios from 'axios'

export class Api {
  protected readonly url: string
  protected readonly token: string

  constructor() {
    this.url = import.meta.env.VITE_API_URL || ''
    this.token = localStorage.getItem('token') || ''
  }

  private async request(
    method: string,
    endpoint: string,
    body?: object,
    headers?: object
  ): Promise<any> {
    try {
      const response = await axios.request({
        method,
        url: `${this.url}/${endpoint}`,
        data: body,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        }
      })
      return response.data
    } catch (error) {
      throw new Error(`Error making ${method.toUpperCase()} request: ${(error as Error).message}`)
    }
  }

  async getObjects(endpoint: string): Promise<any> {
    return this.request('get', endpoint)
  }

  async post(endpoint: string, body: object): Promise<any> {
    return this.request('post', endpoint, body)
  }
}
