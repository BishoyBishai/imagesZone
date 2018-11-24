import { AlbumService } from "./../services/album-service";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { AlbumActionTypes } from "./album.model";
import { mergeMap, map } from "rxjs/operators";
import { LoadAlbumAction, AddAlbumImagesAction } from "./album.actions";
import { convertUnsplashImageToZoneImage } from "../utils";

@Injectable()
export class AlbumsEffects {
  constructor(private action$: Actions, private albumService: AlbumService) {}

  @Effect()
  loadNewAlbum$ = this.action$.pipe(
    // start component loading
    ofType(AlbumActionTypes.Load),
    mergeMap((action: LoadAlbumAction) =>
      this.albumService.loadAlbum(action.payload).pipe(
        //get new album images zone
        map(
          res =>
            new AddAlbumImagesAction(
              convertUnsplashImageToZoneImage(res.results),
            ),
        ),
      ),
    ),
  );
}
