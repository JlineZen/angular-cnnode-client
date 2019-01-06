import { Component, OnInit, OnDestroy } from '@angular/core'
import { HomeService } from '../home/home.service'
import { ActivatedRoute, Params } from '@angular/router'
import { Post } from '../home/post.model'
import { switchMap } from 'rxjs/operators'
import { PageEvent } from '@angular/material'
import { Observable, Subscription } from 'rxjs'
import { DataService } from '../data.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  posts: Post[] = []

  private tag: string

  pageSize: number = 25

  length: number = 1000

  showPageSize: boolean = false

  pageSizeOptions: number[] = [25, 50, 100]

  private sub: Subscription

  constructor(private homeService: HomeService, private activeRoute: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.sub = this.activeRoute.paramMap
      .pipe(
        // 频繁切换tab的时候会取消之前的request
        switchMap((params: Params) => {
          this.tag = params.get('tag')
          return this.homeService.getPosts(this.tag, 1, this.pageSize)
        })
      )
      .subscribe(result => {
        if (result.success) {
          this.posts = result.data
          this.dataService.shareData(this.posts.filter(post => post.reply_count === 0))
        }
      })
  }

  pageChange($event: PageEvent): void {
    const observer: Observable<PageEvent> = Observable.create(observer => observer.next($event))
    this.sub = observer
      .pipe(
        switchMap(($event: PageEvent) => {
          this.pageSize = $event.pageSize
          return this.homeService.getPosts(this.tag, $event.pageIndex + 1, $event.pageSize)
        })
      )
      .subscribe(result => {
        if (result.success) {
          this.posts = result.data
          this.dataService.shareData(this.posts.filter(post => post.reply_count === 0))
        }
      })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
