import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteZoneRoutingModule } from './favorite-zone-routing.module';
import { StoreModule } from '@ngrx/store';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ZonesContainerComponent } from './components/zones-container/zones-container.component';
import { ZoneComponent } from './components/zone/zone.component';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  declarations: [GalleryComponent, ZonesContainerComponent, ZoneComponent],
  imports: [
    CommonModule,
    FavoriteZoneRoutingModule,
    NgxGalleryModule,
    StoreModule.forFeature("favorite", {}),
  ]
})
export class FavoriteZoneModule { }
