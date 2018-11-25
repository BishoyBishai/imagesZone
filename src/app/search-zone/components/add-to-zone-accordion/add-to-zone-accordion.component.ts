import { CreateInitZone } from "./../../../favorite-zone/store/favorite.actions";
import { FavoriteZone } from "./../../../favorite-zone/store/favorite.models";
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State } from "../../store/album.model";
import { getFavoriteZones } from "../../../favorite-zone/store/favorite.selector";
import { NgbPanelChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "add-to-zone-accordion",
  templateUrl: "./add-to-zone-accordion.component.html",
  styleUrls: ["./add-to-zone-accordion.component.scss"],
})
export class AddToZoneAccordionComponent implements OnInit {
  subscription: boolean = true;
  constructor(private store: Store<State>) {}
  favoriteZones: FavoriteZone[];
  ngOnInit() {
    this.store
      .pipe(
        select(getFavoriteZones),
        takeWhile(() => this.subscription),
      )
      .subscribe(zones => {
        this.favoriteZones = zones;
      });
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === "add-new-zone") {
      this.store.dispatch(new CreateInitZone());
    }
  }

  ngOnDestroy(): void {
    this.subscription = false;
  }
}
