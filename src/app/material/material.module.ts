import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatButtonToggleModule, 
  MatIconModule} from "@angular/material";

const MaterialComponents = [
  MatButtonModule, 
  MatButtonToggleModule,
  MatIconModule]

@NgModule({
  imports: [MaterialComponents], // Doesn't require declaration as we are only concerned with importing and exporting of components.
  exports: [MaterialComponents]
})
export class MaterialModule { }
