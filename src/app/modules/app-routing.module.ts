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
  {path:'laptops', component : LaptopComponent},
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
