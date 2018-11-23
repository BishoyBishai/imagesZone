import { Image } from "./../../store/album.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "album-image",
  templateUrl: "./album-image.component.html",
  styleUrls: ["./album-image.component.scss"],
})
export class AlbumImageComponent implements OnInit {
  @Input('image') image: Image;
  constructor() {}

  ngOnInit() {}
}
