import { Component } from '@angular/core'
import { LoadingService } from './loading.service'

@Component({
  selector: 'cnode-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class CNodeAppComponent {
  loading: boolean
  progressBarColor: string = 'warn'
  progressBarMode: string = 'indeterminate'
  progressBarValue: number = 50
  progressBarBufferValue: number = 75
  constructor(private loadingService: LoadingService) {
    this.loadingService.onLoadingChanged.subscribe((loading: boolean) => {
      setTimeout(() => {
        this.loading = loading
      })
    })
  }
}
