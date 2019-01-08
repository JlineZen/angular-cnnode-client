import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home.component'
import { PostComponent } from '../posts/post.component'
import { PostDetailComponent } from '../post-detail/post-detail.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':tag',
        component: PostComponent
      },
      {
        path: ':tag/:id',
        component: PostDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouting {}
