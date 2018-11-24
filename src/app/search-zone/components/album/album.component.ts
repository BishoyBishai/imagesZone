import { Component, OnInit } from "@angular/core";
import { State, Image } from "../../store/album.model";
import { Store, select } from "@ngrx/store";
import { getImagesZone } from "../../store/album.selectors";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"],
})
export class AlbumComponent implements OnInit {
  album: Image[];
  constructor(private store: Store<State>, private modalService: NgbModal) {}
  ngOnInit() {
    // listen to changes on image zone
    this.store.pipe(select(getImagesZone)).subscribe(images => {
      this.album = images;
    });
  }
}
