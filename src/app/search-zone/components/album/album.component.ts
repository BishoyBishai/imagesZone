import { LoadMoreAlbumAction } from "./../../store/album.actions";
import { Component, OnInit } from "@angular/core";
import { State, Image } from "../../store/album.model";
import { Store, select } from "@ngrx/store";
import {
  getImagesZone,
  getLoadingState,
  getLoadingMoreData,
} from "../../store/album.selectors";

@Component({
  selector: "app-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.scss"],
})
export class AlbumComponent implements OnInit {
  album: Image[];
  loading: boolean;
  totalPages: number;
  currentPage: number;
  searchBy: string;
  loadingMore: boolean;
  constructor(private store: Store<State>) {}
  ngOnInit() {
    // listen to changes on image zone
    this.store.pipe(select(getImagesZone)).subscribe(images => {
      this.album = images;
    });
    this.store.pipe(select(getLoadingState)).subscribe(loading => {
      this.loading = loading;
    });
    this.store.pipe(select(getLoadingMoreData)).subscribe(data => {
      this.totalPages = data.totalPage;
      this.currentPage = data.currentPage;
      this.loadingMore = data.loadMore;
      this.searchBy = data.searchBy;
    });
  }

  loadMore() {
    this.store.dispatch(
      new LoadMoreAlbumAction(this.currentPage + 1, this.searchBy),
    );
  }
}
