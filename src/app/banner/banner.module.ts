import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { BannerRoutingModule } from './banner-routing.module';

import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    BannerRoutingModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule
  ]
})
export class BannerModule { }
