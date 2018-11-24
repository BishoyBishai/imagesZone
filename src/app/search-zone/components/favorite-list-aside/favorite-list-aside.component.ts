import {
  AddImageToFavoriteList,
  RemoveImageFromFavoriteList,
} from "./../../../favorite-zone/store/favorite.actions";
import { Image } from "./../../store/album.model";
import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../../store/album.model";
import { getCurrentImage } from "../../store/album.selectors";
import { isImageInList } from "../../utils";
import { FavoriteList } from "../../../favorite-zone/store/favorite.models";

@Component({
  selector: "favorite-list-aside",
  templateUrl: "./favorite-list-aside.component.html",
  styleUrls: ["./favorite-list-aside.component.scss"],
})
export class FavoriteListAsideComponent implements OnInit {
  @Input("list") list: FavoriteList;
  constructor(private store: Store<State>) {}
  currentImage: Image;
  currentImageInList: boolean = false;
  ngOnInit() {
    //listen to current image
    //and check if the current image in list
    this.store.select(getCurrentImage).subscribe(img => {
      this.currentImage = img;
      this.currentImageInList = isImageInList(this.list.images, img.id);
    });
  }

  addImageToList(listId) {
    this.store.dispatch(
      new AddImageToFavoriteList({
        id: listId,
        image: this.currentImage,
      }),
    );
  }

  removeImageFromList(listId) {
    this.store.dispatch(
      new RemoveImageFromFavoriteList({
        id: listId,
        imageId: this.currentImage.id,
      }),
    );
  }
}
