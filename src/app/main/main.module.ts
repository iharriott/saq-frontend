import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSidenavModule,
    FormsModule,
    RouterModule
    
  ]
})
export class MainModule { }
