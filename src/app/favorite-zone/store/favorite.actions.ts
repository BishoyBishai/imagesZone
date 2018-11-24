import { Action } from "@ngrx/store";
import {
  ActionFavoriteTypes,
  FavoriteList,
  UpdatedFavoriteListPayload,
  RemoveImageFromListPayload,
  AddImageToFavoriteListPayload,
} from "./favorite.models";

export class AddNewFavoriteList implements Action {
  readonly type = ActionFavoriteTypes.AddList;
  constructor(public payload: FavoriteList) {}
}

export class RemoveFavoriteList implements Action {
  readonly type = ActionFavoriteTypes.RemoveList;
  constructor(public payload: string) {}
}

export class UpdateFavoriteList implements Action {
  readonly type = ActionFavoriteTypes.UpdateList;
  constructor(public payload: FavoriteList) {}
}

export class AddImageToFavoriteList implements Action {
  readonly type = ActionFavoriteTypes.AddImageToList;
  constructor(public payload: AddImageToFavoriteListPayload) {}
}

export class RemoveImageFromFavoriteList implements Action {
  readonly type = ActionFavoriteTypes.RemoveImageFromList;
  constructor(public payload: RemoveImageFromListPayload) {}
}

export class CreateInitList implements Action {
  readonly type = ActionFavoriteTypes.CreateInitList;
}

export class ChangeCurrentList implements Action {
  readonly type = ActionFavoriteTypes.ChangeCurrentList;
  constructor(public payload: FavoriteList) {}
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
  | AddNewFavoriteList
  | RemoveFavoriteList
  | UpdateFavoriteList
  | AddImageToFavoriteList
  | RemoveImageFromFavoriteList
  | ChangeCurrentList
  | CreateInitList
  | ToggleUpdateModal
  | ToggleDeleteModal;
