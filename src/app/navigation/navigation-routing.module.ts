import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from '../book/components/books-list/books-list.component';
import { AuthorListComponent } from '../author/components/author-list/author-list.component';
import { CategoryListComponent } from '../category/components/category-list/category-list.component';
import { AdminDashboardComponent } from '../admin/components/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../admin/guards/auth/auth.guard';
import { NotAuthErrorComponent } from '../admin/components/not-auth-error/not-auth-error.component';
import { BookDetailsComponent } from '../book/components/book-details/book-details.component';
import { UserProfileComponent } from '../user/components/user-profile/user-profile.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AuthorDetailsComponent } from '../author/components/author-details/author-details.component';
import { CategoryDetailsComponent } from '../category/components/category-details/category-details.component';
const routes: Routes = [
  // { path: '', redirectTo: '/books', pathMatch: 'full' },
  // { path: 'home', redirectTo: '/home', component: LandingPageComponent },

  { path: 'home', component: LandingPageComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'author/:id', component: AuthorDetailsComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'category/:id', component: CategoryDetailsComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'not-auth-error', component: NotAuthErrorComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class NavigationRoutingModule {}
