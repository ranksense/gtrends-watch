import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryTopicsComponent } from './category-topics/category-topics.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: {
        label: 'Dashboard',
        url: '/dashboard'
      }
    },
  },
  {
    path: 'trends',
    component: CategoriesComponent,
    data: {
      breadcrumb: {
        label: 'Categories',
        url: '/trends'
      }
    }
  },
  {
    path: 'topics/:id',
    component: CategoryTopicsComponent,
    data: {
      breadcrumb: {
        label: 'Topics',
        url: '/topics'
      }
    }
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
