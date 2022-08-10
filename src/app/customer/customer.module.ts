import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './page/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './page/footer/footer.component';




@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
   
  
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
