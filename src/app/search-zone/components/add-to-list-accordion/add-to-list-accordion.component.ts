import { CreateInitList } from "./../../../favorite-zone/store/favorite.actions";
import { FavoriteList } from "./../../../favorite-zone/store/favorite.models";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../../store/album.model";
import { getFavoriteLists } from "../../../favorite-zone/store/favorite.selector";
import { NgbPanelChangeEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "add-to-list-accordion",
  templateUrl: "./add-to-list-accordion.component.html",
  styleUrls: ["./add-to-list-accordion.component.scss"],
})
export class AddToListAccordionComponent implements OnInit {
  constructor(private store: Store<State>) {}
  favoriteLists: FavoriteList[];
  ngOnInit() {
    this.store.select(getFavoriteLists).subscribe(lists => {
      this.favoriteLists = lists;
    });
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === "add-new-list") {
      this.store.dispatch(new CreateInitList());
    }
  }
}
