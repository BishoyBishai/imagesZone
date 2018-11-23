import { Action } from "@ngrx/store";
import { AlbumActionTypes, Image } from "./album.model";

export class LoadAlbumAction implements Action {
  readonly type = AlbumActionTypes.Load;
}
export class LoadAlbumSuccessAction implements Action {
  readonly type = AlbumActionTypes.LoadSuccess;
}
export class LoadAlbumFailAction implements Action {
  readonly type = AlbumActionTypes.LoadFail;
  constructor(public payload: any) {}
}
export class AddImageIsFavoriteAction implements Action {
  readonly type = AlbumActionTypes.AddImageAsFavorite;
  constructor(public payload: Image) {}
}
export class RemoveImageFromFavoritesListAction implements Action {
  readonly type = AlbumActionTypes.RemoveImageFromFavorites;
  constructor(public payload: string) {}
}
export class AddAlbumImagesAction implements Action {
  readonly type = AlbumActionTypes.AddAlbumImages;
  constructor(public payload: Image[]) {}
}

export type AlbumActions =
  | LoadAlbumAction
  | LoadAlbumSuccessAction
  | LoadAlbumFailAction
  | AddImageIsFavoriteAction
  | RemoveImageFromFavoritesListAction
  | AddAlbumImagesAction;
  