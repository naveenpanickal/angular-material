import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatButtonToggleModule, 
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule} from "@angular/material";
import{ MatBadgeModule} from "@angular/material/badge"

const MaterialComponents = [
  MatButtonModule, 
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule]

@NgModule({
  imports: [MaterialComponents], // Doesn't require declaration as we are only concerned with importing and exporting of components.
  exports: [MaterialComponents]
})
export class MaterialModule { }