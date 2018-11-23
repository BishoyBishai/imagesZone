import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchZoneRoutingModule } from "./search-zone-routing.module";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchZoneRoutingModule,
    StoreModule.forFeature("album", {}),
  ],
})
export class SearchZoneModule {}
