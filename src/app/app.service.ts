import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Nav } from './nav.model'
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  navs: Nav[]

  constructor(private http: HttpClient) {}

  getNavs(): Observable<Nav[]> {
    const url: string = '/api/navs'
    return this.http.get<Nav[]>(url).pipe(catchError(this.handleError('handleTabError', [])))
  }

  private handleError<T>(operation = 'handleTabError', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T)
    }
  }
}
