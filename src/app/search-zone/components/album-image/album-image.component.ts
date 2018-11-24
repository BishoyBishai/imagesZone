import { Image } from "./../../store/album.model";
import { State } from "../../store/album.model";
import { Store } from "@ngrx/store";
import { Component, OnInit, Input } from "@angular/core";
import { ToggleAddToListModalAction, changeCurrentImageAction } from "../../store/album.actions";

@Component({
  selector: "album-image",
  templateUrl: "./album-image.component.html",
  styleUrls: ["./album-image.component.scss"],
})
export class AlbumImageComponent {
  @Input("image") image: Image;
  constructor(private store: Store<State>) {}

  addToMyZone(image: Image) {
    this.store.dispatch(new changeCurrentImageAction(image));
    this.store.dispatch(new ToggleAddToListModalAction(true));
  }
}
