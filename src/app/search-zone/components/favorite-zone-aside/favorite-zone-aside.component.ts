import {
  AddImageToFavoriteZone,
  RemoveImageFromFavoriteZone,
} from "./../../../favorite-zone/store/favorite.actions";
import { Image } from "./../../store/album.model";
import { Component, OnInit, Input } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State } from "../../store/album.model";
import { getCurrentImage } from "../../store/album.selectors";
import { isImageInZone } from "../../utils";
import { FavoriteZone } from "../../../favorite-zone/store/favorite.models";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "favorite-zone-aside",
  templateUrl: "./favorite-zone-aside.component.html",
  styleUrls: ["./favorite-zone-aside.component.scss"],
})
export class FavoriteZoneAsideComponent implements OnInit {
  @Input("zone") zone: FavoriteZone;
  subscription: boolean = true;
  constructor(private store: Store<State>) {}
  currentImage: Image;
  currentImageInZone: boolean = false;
  ngOnInit() {
    //listen to current image
    //and check if the current image in zone
    this.store
      .pipe(
        select(getCurrentImage),
        takeWhile(() => this.subscription),
      )
      .subscribe(img => {
        this.currentImage = img;
        this.currentImageInZone = isImageInZone(this.zone.images, img.id);
      });
  }

  addImageToZone(zoneId) {
    this.store.dispatch(
      new AddImageToFavoriteZone({
        id: zoneId,
        image: this.currentImage,
      }),
    );
  }

  removeImageFromZone(zoneId) {
    this.store.dispatch(
      new RemoveImageFromFavoriteZone({
        id: zoneId,
        imageId: this.currentImage.id,
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription = false;
  }
}
