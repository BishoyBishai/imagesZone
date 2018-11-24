import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteListFormComponent } from './favorite-list-form/favorite-list-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FavoriteListFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  exports:[FavoriteListFormComponent]
})
export class SharedModule { }
