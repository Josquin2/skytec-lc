export class Api {
  url: String = '';
  token: String = '';

  constructor() {
    this.url = import.meta.env.VITE_API_URL || '';
    this.token = import.meta.env.VITE_API_TOKEN || '';
  }

  async getObjects(endpoint: String) {
    const resp = await fetch(`${this.url}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    })
    return await resp.json()
  }
}