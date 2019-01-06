import { Component } from '@angular/core'
import { LoadingService } from './loading.service'
import { debounceTime } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Component({
  selector: 'cnode-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class CNodeAppComponent {
  loading$: Observable<boolean>
  progressBarColor: string = 'warn'
  progressBarMode: string = 'indeterminate'
  progressBarValue: number = 50
  progressBarBufferValue: number = 75
  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.onLoadingChanged.pipe(debounceTime(100))
  }
}
