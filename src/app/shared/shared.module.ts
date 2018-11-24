import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteZoneFormComponent } from './favorite-zone-form/favorite-zone-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FavoriteZoneFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  exports:[FavoriteZoneFormComponent]
})
export class SharedModule { }
