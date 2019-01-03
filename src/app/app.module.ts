import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { CNodeAppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppNavComponent } from './app-nav/app-nav.component'
import { HttpClientModule } from '@angular/common/http'
import { AppFooterComponent } from './app-footer/app-footer.component'
import { MatButtonModule } from '@angular/material'

@NgModule({
  declarations: [CNodeAppComponent, AppNavComponent, AppFooterComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, MatButtonModule],
  providers: [],
  bootstrap: [CNodeAppComponent]
})
export class AppModule {}
