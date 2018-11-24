import { ToggleUpdateModal, ChangeCurrentZone, ToggleDeleteModal } from "./../../store/favorite.actions";
import { AppState } from "./../../../store/app.models";
import { FavoriteZone } from "./../../store/favorite.models";
import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "zone",
  templateUrl: "./zone.component.html",
  styleUrls: ["./zone.component.scss"],
})
export class ZoneComponent {
  @Input("zone") zone: FavoriteZone;
  constructor(private store: Store<AppState>) {}
  
  openUpdateModal(zone) {
    this.store.dispatch(new ChangeCurrentZone(zone));
    this.store.dispatch(new ToggleUpdateModal(true));
  }
  openDeleteModal(zone) {
    this.store.dispatch(new ChangeCurrentZone(zone));
    this.store.dispatch(new ToggleDeleteModal(true));
  }
}
