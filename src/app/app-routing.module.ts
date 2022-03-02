import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: UserListComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'user-detail/:id', component: UserDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }