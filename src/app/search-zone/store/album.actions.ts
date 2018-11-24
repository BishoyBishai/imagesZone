import { Action } from "@ngrx/store";
import { AlbumActionTypes, Image } from "./album.model";

export class LoadAlbumAction implements Action {
  readonly type = AlbumActionTypes.Load;
  constructor(public payload: string) {}
}
export class LoadAlbumSuccessAction implements Action {
  readonly type = AlbumActionTypes.LoadSuccess;
}
export class LoadAlbumFailAction implements Action {
  readonly type = AlbumActionTypes.LoadFail;
  constructor(public payload: any) {}
}
export class changeCurrentImageAction implements Action {
  readonly type = AlbumActionTypes.ChangeCurrentImage;
  constructor(public payload: Image) {}
}

export class AddAlbumImagesAction implements Action {
  readonly type = AlbumActionTypes.AddAlbumImages;
  constructor(public payload: Image[]) {}
}
export class ToggleAddToZoneModalAction implements Action {
  readonly type = AlbumActionTypes.ToggleAddToZoneModal;
  constructor(public payload: boolean) {}
}

export type AlbumActions =
  | LoadAlbumAction
  | LoadAlbumSuccessAction
  | LoadAlbumFailAction
  | changeCurrentImageAction
  | AddAlbumImagesAction
  | ToggleAddToZoneModalAction;
