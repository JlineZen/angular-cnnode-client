import { Component, OnInit } from '@angular/core'
import { Observable, fromEvent, of } from 'rxjs'
import { debounceTime, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {
  show$: Observable<boolean>

  constructor() {}

  ngOnInit() {
    this.show$ = fromEvent(window, 'scroll').pipe(
      debounceTime(100),
      switchMap(() => {
        const bool = window.scrollY > 200
        return of(bool)
      })
    )
  }
}
