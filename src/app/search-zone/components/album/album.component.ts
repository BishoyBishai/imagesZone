import { Component, OnInit } from "@angular/core";
import { State, Image } from "../../store/album.model";
import { Store, select } from "@ngrx/store";
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
    // listen to changes on image list
    this.store.pipe(select(getImagesList)).subscribe(images => {
      this.album = images;
    });
  }
}
