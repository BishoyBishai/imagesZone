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
export class removeFavoriteList implements Action {
  readonly type = ActionFavoriteTypes.RemoveList;
  constructor(public payload: string) {}
}
export class updateFavoriteList implements Action {
  readonly type = ActionFavoriteTypes.UpdateList;
  constructor(public payload: UpdatedFavoriteListPayload) {}
}

export class AddImageToFavoriteList implements Action {
  readonly type = ActionFavoriteTypes.AddImageToList;
  constructor(public payload: AddImageToFavoriteListPayload) {}
}

export class RemoveImageFromFavoriteList implements Action {
  readonly type = ActionFavoriteTypes.RemoveImageFromList;
  constructor(public payload: RemoveImageFromListPayload) {}
}

export type FavoriteActions =
  | AddNewFavoriteList
  | removeFavoriteList
  | updateFavoriteList
  | AddImageToFavoriteList
  | RemoveImageFromFavoriteList;
