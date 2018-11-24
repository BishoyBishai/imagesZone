import { ToggleUpdateModal, ChangeCurrentList } from "./../../store/favorite.actions";
import { AppState } from "./../../../store/app.models";
import { FavoriteList } from "./../../store/favorite.models";
import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "zone",
  templateUrl: "./zone.component.html",
  styleUrls: ["./zone.component.scss"],
})
export class ZoneComponent {
  @Input("zone") zone: FavoriteList;
  constructor(private store: Store<AppState>) {}
  
  openUpdateModal(zone) {
    this.store.dispatch(new ChangeCurrentList(zone));
    this.store.dispatch(new ToggleUpdateModal(true));
  }
}
