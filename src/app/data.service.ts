import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource: BehaviorSubject<any> = new BehaviorSubject('')

  currentData: Observable<any> = this.dataSource.asObservable()

  constructor() {}

  shareData(data: any) {
    this.dataSource.next(data)
  }
}
