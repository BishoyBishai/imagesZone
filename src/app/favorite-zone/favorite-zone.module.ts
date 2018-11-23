import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteZoneRoutingModule } from './favorite-zone-routing.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FavoriteZoneRoutingModule,
    StoreModule.forFeature("favorite", {}),
  ]
})
export class FavoriteZoneModule { }
