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
import { AlbumImageComponent } from './components/album-image/album-image.component';

@NgModule({
  declarations: [AlbumComponent, AlbumImageComponent],
  imports: [
    CommonModule,
    SearchZoneRoutingModule,
    HttpClientModule,
    StoreModule.forFeature("albums", albumReducer),
    EffectsModule.forFeature([AlbumsEffects]),
  ],
  providers: [AlbumService],
})
export class SearchZoneModule {}
