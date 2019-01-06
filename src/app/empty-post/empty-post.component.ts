import { Component, OnInit } from '@angular/core'
import { DataService } from '../data.service'
import { Observable } from 'rxjs'
import { Post } from '../home/post.model'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-empty-post',
  templateUrl: './empty-post.component.html',
  styleUrls: ['./empty-post.component.scss']
})
export class EmptyPostComponent implements OnInit {
  emptyPosts$: Observable<Post>

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.emptyPosts$ = this.dataService.currentData.pipe(map(data => data.slice(0, 5)))
  }
}
