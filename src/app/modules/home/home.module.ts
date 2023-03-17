import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialComponentsModule } from 'src/app/material/material-components/material-components.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    MaterialComponentsModule
  ]
})
export class HomeModule { }
