import { AuthaGuard } from './guards/autha.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { FooterComponent } from './layouts/footer/footer.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { NavComponent } from './layouts/nav/nav.component';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { PenComponent } from './products/pen/pen.component';
import { BooksComponent } from './products/books/books.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { BikeComponent } from './products/bike/bike.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { HomeComponent } from './layouts/home/home.component';
import { KawasakiComponent } from './products/bike/kawasaki/kawasaki.component';
import { YamahaComponent } from './products/bike/yamaha/yamaha.component';
import { BikeNavComponent } from './products/bike/bike-nav/bike-nav.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    FooterComponent,
    BannerThreeComponent,
    ContactUsComponent,
    BannerTwoComponent,
    ProductsComponent,
    BannerOneComponent,
    NavComponent,
    SimpleStyleDirective,
    PenComponent,
    BooksComponent,
    LaptopComponent,
    BikeComponent,
    PageNotFoundComponent,
    HomeComponent,
    KawasakiComponent,
    YamahaComponent,
    BikeNavComponent,
    AdminComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [AuthaGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
