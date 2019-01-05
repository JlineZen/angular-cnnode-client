import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'
import { LoadingService } from './loading.service'
import { finalize } from 'rxjs/operators'

@Injectable()
export class AppInterCeptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.onStared(request)
    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.onFinished(request)
      })
    )
  }
}
