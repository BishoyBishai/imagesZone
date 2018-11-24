import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/app.models";
import { FavoriteZone } from "../../store/favorite.models";
import { getFavoriteZones } from "../../store/favorite.selector";

@Component({
  selector: "zones-container",
  templateUrl: "./zones-container.component.html",
  styleUrls: ["./zones-container.component.scss"],
})
export class ZonesContainerComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  zones: FavoriteZone[];

  ngOnInit() {
    this.store.select(getFavoriteZones).subscribe(zones => {
      this.zones = zones;
    });
  }
}
