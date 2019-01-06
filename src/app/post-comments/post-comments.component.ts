import { Component, OnInit, Input } from '@angular/core'
import { PostComment } from '../post-comment/post.comment'

@Component({
  selector: 'post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  @Input() comments: PostComment[]

  constructor() {}

  ngOnInit() {}
}
