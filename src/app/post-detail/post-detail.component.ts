import { Component, OnInit } from '@angular/core'
import { HomeService } from '../home/home.service'
import { ActivatedRoute, Params } from '@angular/router'
import { switchMap, map } from 'rxjs/operators'
import { Post } from '../home/post.model'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post$: Observable<Post>

  constructor(private homeService: HomeService, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.post$ = this.activeRoute.paramMap.pipe(
      map((params: Params) => params.get('id')),
      switchMap(id => this.homeService.getPost(id)),
      map(result => result.data)
    )
  }
}
