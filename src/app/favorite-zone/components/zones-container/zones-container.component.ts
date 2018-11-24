import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/app.models";
import { FavoriteList } from "../../store/favorite.models";
import { getFavoriteLists } from "../../store/favorite.selector";

@Component({
  selector: "zones-container",
  templateUrl: "./zones-container.component.html",
  styleUrls: ["./zones-container.component.scss"],
})
export class ZonesContainerComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  zones: FavoriteList[];

  ngOnInit() {
    this.store.select(getFavoriteLists).subscribe(zones => {
      this.zones = zones;
    });
  }
}
