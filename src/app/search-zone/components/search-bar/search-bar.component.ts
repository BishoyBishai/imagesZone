import { Component, OnInit } from "@angular/core";
import { State } from "../../store/album.model";
import { Store } from "@ngrx/store";
import { LoadAlbumAction } from "../../store/album.actions";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  constructor(private store: Store<State>) {}
  doSearch(key: string) {
    // fire search action
    this.store.dispatch(new LoadAlbumAction(key));
  }
  ngOnInit() {}
}
