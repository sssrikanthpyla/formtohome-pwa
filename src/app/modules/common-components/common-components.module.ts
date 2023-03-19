import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialComponentsModule } from 'src/app/material/material-components/material-components.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule
  ],
  exports: [MenuBarComponent]
})
export class CommonComponentsModule { }
