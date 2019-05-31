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
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { Inerceptor} from "./inerceptor.service";
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSliderModule, MatTableModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {ApiService} from "./api.service";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UploadComponent} from "./commponents/upload/upload.component";
import {DialogComponent} from "./commponents/upload/dialog/dialog.component";
import {UploadService} from "./commponents/upload/upload.service";
import {NewsComponent} from "./section/news/news.component";
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';

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
    NewsComponent,
    HomeComponent,
    NotFoundComponent,
    AdminComponent,
    LoginComponent,
    UploadComponent, DialogComponent, OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    CommonModule, MatButtonModule, MatDialogModule, MatListModule, FlexLayoutModule, HttpClientModule, BrowserAnimationsModule, MatProgressBarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Inerceptor, multi: true},
    CookieService,
    UploadService,
    ApiService,
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
