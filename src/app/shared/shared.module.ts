import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FavoriteZoneFormComponent } from "./favorite-zone-form/favorite-zone-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  declarations: [FavoriteZoneFormComponent, LoaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FavoriteZoneFormComponent, LoaderComponent],
})
export class SharedModule {}
