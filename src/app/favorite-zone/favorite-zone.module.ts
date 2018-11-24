import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FavoriteZoneRoutingModule } from "./favorite-zone-routing.module";
import { StoreModule } from "@ngrx/store";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { ZonesContainerComponent } from "./components/zones-container/zones-container.component";
import { ZoneComponent } from "./components/zone/zone.component";
import { NgxGalleryModule } from "ngx-gallery";
import { UpdateZoneModalComponent } from "./components/update-zone-modal/update-zone-modal.component";
import { DeleteZoneModalComponent } from "./components/delete-zone-modal/delete-zone-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    GalleryComponent,
    ZonesContainerComponent,
    ZoneComponent,
    UpdateZoneModalComponent,
    DeleteZoneModalComponent,
    
  ],
  imports: [
    CommonModule,
    FavoriteZoneRoutingModule,
    NgxGalleryModule,
    StoreModule.forFeature("favorite", {}),
    NgbModule.forRoot(),
    SharedModule,
  ],
})
export class FavoriteZoneModule {}
