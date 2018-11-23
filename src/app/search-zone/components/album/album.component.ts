import { Component, OnInit } from "@angular/core";
import { State, Image } from "../../store/album.model";
import { Store, select } from "@ngrx/store";
import { LoadAlbumAction } from "../../store/album.actions";
import { getImagesList } from "../../store/album.selectors";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"],
})
export class AlbumComponent implements OnInit {
  album: Image[];
  constructor(private store: Store<State>) {}
  ngOnInit() {
    // fire search action
    this.store.dispatch(new LoadAlbumAction("test"));
    //subscribe for album images
    this.store.pipe(select(getImagesList)).subscribe(images => {
      console.log(images);
      this.album = images;
    });
  }
}
