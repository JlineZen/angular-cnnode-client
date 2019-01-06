import { Component, OnInit, Input } from '@angular/core'
import { PostComment } from './post.comment'

@Component({
  selector: 'post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
  @Input() comment: PostComment

  constructor() {}

  ngOnInit() {}
}
