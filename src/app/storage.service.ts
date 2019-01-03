import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private key: string = 'cnode_storage'

  constructor() {}

  setItem(key: string, value: any): void {
    const storage = JSON.parse(localStorage.getItem(this.key))
    storage[key] = value
    localStorage.setItem(this.key, JSON.stringify(storage))
  }

  getItem(key: string): any {
    const storage = JSON.parse(localStorage.getItem(this.key))
    return storage[key] ? storage[key] : undefined
  }
}
