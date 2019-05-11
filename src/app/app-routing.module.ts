import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CategoriesComponent } from './categories/categories.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {CategoryTopicsComponent} from './category-topics/category-topics.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trends', component: CategoriesComponent },
  { path: 'topics/:id', component: CategoryTopicsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
