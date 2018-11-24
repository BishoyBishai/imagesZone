import { Action } from "@ngrx/store";
import {
  ActionFavoriteTypes,
  FavoriteZone,
  UpdatedFavoriteZonePayload,
  RemoveImageFromZonePayload,
  AddImageToFavoriteZonePayload,
} from "./favorite.models";

export class AddNewFavoriteZone implements Action {
  readonly type = ActionFavoriteTypes.AddZone;
  constructor(public payload: FavoriteZone) {}
}

export class RemoveFavoriteZone implements Action {
  readonly type = ActionFavoriteTypes.RemoveZone;
  constructor(public payload: string) {}
}

export class UpdateFavoriteZone implements Action {
  readonly type = ActionFavoriteTypes.UpdateZone;
  constructor(public payload: FavoriteZone) {}
}

export class AddImageToFavoriteZone implements Action {
  readonly type = ActionFavoriteTypes.AddImageToZone;
  constructor(public payload: AddImageToFavoriteZonePayload) {}
}

export class RemoveImageFromFavoriteZone implements Action {
  readonly type = ActionFavoriteTypes.RemoveImageFromZone;
  constructor(public payload: RemoveImageFromZonePayload) {}
}

export class CreateInitZone implements Action {
  readonly type = ActionFavoriteTypes.CreateInitZone;
}

export class ChangeCurrentZone implements Action {
  readonly type = ActionFavoriteTypes.ChangeCurrentZone;
  constructor(public payload: FavoriteZone) {}
}
export class ToggleUpdateModal implements Action {
  readonly type = ActionFavoriteTypes.ToggleUpdateModal;
  constructor(public payload: boolean) {}
}
export class ToggleDeleteModal implements Action {
  readonly type = ActionFavoriteTypes.ToggleDeleteModal;
  constructor(public payload: boolean) {}
}

export type FavoriteActions =
  | AddNewFavoriteZone
  | RemoveFavoriteZone
  | UpdateFavoriteZone
  | AddImageToFavoriteZone
  | RemoveImageFromFavoriteZone
  | ChangeCurrentZone
  | CreateInitZone
  | ToggleUpdateModal
  | ToggleDeleteModal;
