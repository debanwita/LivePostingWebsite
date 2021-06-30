import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListngComponent } from './post-listng/post-listng.component';
import { AuthComponent } from './auth/auth.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [
  {
    path: 'post-list',
    component: PostListngComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'post-add',
    component: PostEditComponent,
  },
  {
    path: '',
    component: PostListngComponent,
    pathMatch: 'full',
  },
  {
    path: 'post-edit/:index',
    component: PostEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
