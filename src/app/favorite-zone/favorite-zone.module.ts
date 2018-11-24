import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FavoriteZoneRoutingModule } from "./favorite-zone-routing.module";
import { StoreModule } from "@ngrx/store";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { ZonesContainerComponent } from "./components/zones-container/zones-container.component";
import { ZoneComponent } from "./components/zone/zone.component";
import { NgxGalleryModule } from "ngx-gallery";
import { UpdateListModalComponent } from "./components/update-list-modal/update-list-modal.component";
import { DeleteListModalComponent } from "./components/delete-list-modal/delete-list-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    GalleryComponent,
    ZonesContainerComponent,
    ZoneComponent,
    UpdateListModalComponent,
    DeleteListModalComponent,
    
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
