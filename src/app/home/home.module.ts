import { NgModule } from '@angular/core'
import { HomeComponent } from './home.component'
import { PostComponent } from '../posts/post.component'
import { MatTabsModule, MatPaginatorModule, MatButtonModule } from '@angular/material'
import { HomeRouting } from './home.routing.module'
import { CommonModule } from '@angular/common'
import { HomeService } from './home.service'
import { PostDetailComponent } from '../post-detail/post-detail.component'
import { LoginCardComponent } from '../login-card/login-card.component'
import { PanelComponent } from '../panel/panel.component'
import { EmptyPostComponent } from '../empty-post/empty-post.component'
import { FriendlyLinkComponent } from '../friendly-link/friendly-link.component'
import { TabPipe } from '../posts/post.tab.pipe'
import { PostCommentsComponent } from '../post-comments/post-comments.component'
import { TimePipe } from '../posts/time.pipe'
import { PostCommentComponent } from '../post-comment/post-comment.component'

@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    PostDetailComponent,
    LoginCardComponent,
    PanelComponent,
    EmptyPostComponent,
    FriendlyLinkComponent,
    TabPipe,
    PostCommentsComponent,
    TimePipe,
    PostCommentComponent
  ],
  imports: [MatTabsModule, HomeRouting, CommonModule, MatPaginatorModule, MatButtonModule],
  providers: [HomeService]
})
export class HomeModule {}
