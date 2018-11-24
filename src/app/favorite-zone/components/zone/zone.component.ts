import { FavoriteList } from "./../../store/favorite.models";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "zone",
  templateUrl: "./zone.component.html",
  styleUrls: ["./zone.component.scss"],
})
export class ZoneComponent implements OnInit {
  @Input("zone") zone: FavoriteList;
  constructor() {}

  ngOnInit() {

  }
}
