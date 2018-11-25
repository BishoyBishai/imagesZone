import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../../store/app.models";
import { FavoriteZone } from "../../store/favorite.models";
import { getFavoriteZones } from "../../store/favorite.selector";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "zones-container",
  templateUrl: "./zones-container.component.html",
  styleUrls: ["./zones-container.component.scss"],
})
export class ZonesContainerComponent implements OnInit {
  subscription: boolean = true;
  constructor(private store: Store<AppState>) {}
  zones: FavoriteZone[];

  ngOnInit() {
    this.store
      .pipe(
        select(getFavoriteZones),
        takeWhile(() => this.subscription),
      )
      .subscribe(zones => {
        this.zones = zones;
      });
  }
  ngOnDestroy(): void {
    this.subscription = false;
  }
}
