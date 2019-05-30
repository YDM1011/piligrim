import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commponents/header/header.component';
import { FooterComponent } from './commponents/footer/footer.component';
import { PostComponent } from './commponents/post/post.component';
import { AboutAsComponent } from './section/about-as/about-as.component';
import { HowWeWorkComponent } from './section/how-we-work/how-we-work.component';
import { TechnolodgiesComponent } from './section/technolodgies/technolodgies.component';
import { ContactsComponent } from './section/contacts/contacts.component';
import { AllNewsComponent } from './pages/all-news/all-news.component';
import { DetailNewsComponent } from './pages/detail-news/detail-news.component';
import { OtherNewsComponent } from './section/other-news/other-news.component';
import { UploadModule } from "./commponents/upload/upload.module";
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inerceptor} from "./inerceptor.service";
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import {MatButtonModule, MatInputModule, MatSliderModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {ApiService} from "./api.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    AboutAsComponent,
    HowWeWorkComponent,
    TechnolodgiesComponent,
    ContactsComponent,
    AllNewsComponent,
    DetailNewsComponent,
    OtherNewsComponent,
    HomeComponent,
    NotFoundComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Inerceptor, multi: true},
    CookieService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
