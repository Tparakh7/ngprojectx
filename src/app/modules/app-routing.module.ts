import { ReactFormsComponent } from './../components/forms/react-forms/react-forms.component';
import { TempFormsComponent } from './../components/forms/temp-forms/temp-forms.component';
import { LapofferComponent } from './../products/laptop/lapoffer/lapoffer.component';
import { LapdetailComponent } from './../products/laptop/lapdetail/lapdetail.component';
import { LoginComponent } from './../admin/login/login.component';
import { DashboardComponent } from './../admin/dashboard/dashboard.component';
import { AuthaGuard } from './../guards/autha.guard';
import { BikeNavComponent } from './../products/bike/bike-nav/bike-nav.component';
import { YamahaComponent } from './../products/bike/yamaha/yamaha.component';
import { KawasakiComponent } from './../products/bike/kawasaki/kawasaki.component';
import { PageNotFoundComponent } from './../layouts/page-not-found/page-not-found.component';
import { HomeComponent } from './../layouts/home/home.component';
import { BikeComponent } from './../products/bike/bike.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../products/books/books.component';
import { Routes, RouterModule } from '@angular/router';
import { LaptopComponent } from '../products/laptop/laptop.component';
import { PenComponent } from '../products/pen/pen.component';



const appRoutes: Routes= [
  {path:'', component : HomeComponent},
  {path:'home', component : HomeComponent},
  {path:'login', component : LoginComponent},
  {path:'dashboard', canActivate: [AuthaGuard], component : DashboardComponent},


  {path:'bikes', component : BikeNavComponent,
   children : [
     {
       path:'', component : BikeComponent
     },
     {
       path:'kawasaki', component : KawasakiComponent
     },
     {
       path:'yamaha', component : YamahaComponent
     }
   ]
  },  
  {path:'books', component: BooksComponent},
  {path:'temp', component: TempFormsComponent},
  {path:'react', component: ReactFormsComponent},
  
  {path:'laptops', component : LaptopComponent},
  {path:'lapdetails', component : LapdetailComponent, outlet:"outlet1"},
  {path:'lapoffers', component : LapofferComponent, outlet:"outlet2"},
  {path:'pens', component : PenComponent}, 
  {path:'**', component : PageNotFoundComponent} 

]; 
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule], 
})
export class AppRoutingModule { }
