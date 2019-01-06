import { NgModule } from '@angular/core'
import { HomeComponent } from './home.component'
import { PostComponent } from '../post/post.component'
import { MatTabsModule, MatPaginatorModule, MatButtonModule } from '@angular/material'
import { HomeRouting } from './home.routing.module'
import { CommonModule } from '@angular/common'
import { HomeService } from './home.service'
import { PostDetailComponent } from '../post-detail/post-detail.component'
import { LoginCardComponent } from '../login-card/login-card.component'
import { PanelComponent } from '../panel/panel.component'
import { EmptyPostComponent } from '../empty-post/empty-post.component'
import { FriendlyLinkComponent } from '../friendly-link/friendly-link.component'
import { TabPipe } from '../post/post.tab.pipe'
import { CommentsComponent } from '../comments/comments.component'

@NgModule({
  declarations: [HomeComponent, PostComponent, PostDetailComponent, LoginCardComponent, PanelComponent, EmptyPostComponent, FriendlyLinkComponent, TabPipe, CommentsComponent],
  imports: [MatTabsModule, HomeRouting, CommonModule, MatPaginatorModule, MatButtonModule],
  providers: [HomeService]
})
export class HomeModule {}
