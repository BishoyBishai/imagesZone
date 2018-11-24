import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { SearchZoneRoutingModule } from "./search-zone-routing.module";
import { StoreModule } from "@ngrx/store";
import { albumReducer } from "./store/album.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AlbumsEffects } from "./store/album.effects";
import { AlbumComponent } from "./components/album/album.component";
import { AlbumService } from "./services/album-service";
import { AlbumImageComponent } from "./components/album-image/album-image.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { AddToZoneModalComponent } from "./components/add-to-zone-modal/add-to-zone-modal.component";
import { AddToZoneAccordionComponent } from "./components/add-to-zone-accordion/add-to-zone-accordion.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FavoriteZoneAsideComponent } from './components/favorite-zone-aside/favorite-zone-aside.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AlbumComponent,
    AlbumImageComponent,
    SearchBarComponent,
    AddToZoneModalComponent,
    AddToZoneAccordionComponent,
    FavoriteZoneAsideComponent,
  ],
  imports: [
    CommonModule,
    SearchZoneRoutingModule,
    HttpClientModule,
    StoreModule.forFeature("albums", albumReducer),
    EffectsModule.forFeature([AlbumsEffects]),
    NgbModule.forRoot(),
    SharedModule
  ],
  providers: [AlbumService],
})
export class SearchZoneModule {}
