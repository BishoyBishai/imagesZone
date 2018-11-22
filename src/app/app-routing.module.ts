import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./search-zone/search-zone.module#SearchZoneModule",
    pathMatch: "full",
  },
  {
    path: "favorite",
    loadChildren: "./favorite-zone/favorite-zone.module#FavoriteZoneModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
