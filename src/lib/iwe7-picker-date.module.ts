import { PickerDateComponent } from './picker-date/picker-date';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Iwe7PickerModule } from '../../../iwe7-picker/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Iwe7PickerModule
  ],
  declarations: [
    PickerDateComponent
  ],
  exports: [
    PickerDateComponent
  ]
})
export class Iwe7PickerDateModule { }

