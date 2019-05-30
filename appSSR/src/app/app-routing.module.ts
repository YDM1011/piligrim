import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from "./pages/home/home.component";
import { AllNewsComponent } from "./pages/all-news/all-news.component";
import { DetailNewsComponent } from "./pages/detail-news/detail-news.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {LoginComponent} from "./pages/login/login.component";
import {IsLoginGuard} from "./is-login.guard";
import {IsLogoutGuard} from "./is-logout.guard";

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'news', component: AllNewsComponent, children:[
    {path: ':id', component: DetailNewsComponent}
    ]},
  { path: 'admin', component: AdminComponent, canActivate: [IsLoginGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsLogoutGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
