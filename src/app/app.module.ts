import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { CNodeAppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppNavComponent } from './app-nav/app-nav.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppFooterComponent } from './app-footer/app-footer.component'
import { MatButtonModule, MatProgressBarModule } from '@angular/material'
import { LoadingService } from './loading.service'
import { AppInterCeptor } from './app.interceptors'

@NgModule({
  declarations: [CNodeAppComponent, AppNavComponent, AppFooterComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, MatButtonModule, MatProgressBarModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (loadingService: LoadingService) => new AppInterCeptor(loadingService),
      multi: true,
      deps: [LoadingService]
    }
  ],
  bootstrap: [CNodeAppComponent]
})
export class AppModule {}
