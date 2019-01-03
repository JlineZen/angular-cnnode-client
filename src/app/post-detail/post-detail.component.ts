import { Component, OnInit } from '@angular/core'
import { HomeService } from '../home/home.service'
import { ActivatedRoute, Params } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { Post } from '../home/post.model'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post = new Post()

  constructor(private homeService: HomeService, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.paramMap
      .pipe(
        switchMap((params: Params) => {
          return this.homeService.getPost(params.get('id'))
        })
      )
      .subscribe(result => {
        if (result.success) {
          this.post = result.data
        }
      })
  }
}
