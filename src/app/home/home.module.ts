import { NgModule } from '@angular/core'
import { HomeComponent } from './home.component'
import { PostComponent } from '../post/post.component'
import { MatTabsModule, MatPaginatorModule, MatButtonModule } from '@angular/material'
import { HomeRouting } from './home.routing.module'
import { CommonModule } from '@angular/common'
import { HomeService } from './home.service'
import { PostDetailComponent } from '../post-detail/post-detail.component'

@NgModule({
  declarations: [HomeComponent, PostComponent, PostDetailComponent],
  imports: [MatTabsModule, HomeRouting, CommonModule, MatPaginatorModule, MatButtonModule],
  providers: [HomeService]
})
export class HomeModule {}
