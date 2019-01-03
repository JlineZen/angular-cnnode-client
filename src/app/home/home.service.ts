import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Link } from './link.model'
import { HttpClient } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators'

const links: Link[] = [
  {
    label: '全部',
    path: 'all'
  },
  {
    label: '精华',
    path: 'good'
  },
  {
    label: '分享',
    path: 'share'
  },
  {
    label: '问答',
    path: 'ask'
  },
  {
    label: '招聘',
    path: 'job'
  },
  {
    label: '客户端测试',
    path: 'dev'
  }
]

@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getTags(): Observable<Link[]> {
    return of(links)
  }

  getPosts(tag: string = 'all', page: Number = 1, limit: number = 25): Observable<any> {
    const url: string = `/api/topics?tab=${tag}&page=${page}&limit=${limit}`
    return this.httpClient.get(url).pipe(
      retry(3),
      catchError(this.catchError('getPostsError', []))
    )
  }

  private catchError<T>(error: string = 'handleError', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T)
    }
  }

  getPost(postId: string): Observable<any> {
    const url: string = `/api/topic/${postId}`
    return this.httpClient.get(url).pipe(
      retry(3),
      catchError(this.catchError('getPostError', {}))
    )
  }
}
