import { Image } from "./../../search-zone/store/album.model";
export interface FavoriteList {
  id: string;
  name: string;
  description: string;
  images: Image[];
}

export enum ActionFavoriteTypes {
  Load = "[Favorite] Load favorite lists",
  LoadSuccess = "[Favorite] Load Success",
  AddList = "[Favorite] Add favorite list",
  RemoveList = "[Favorite] Remove favorite list",
  UpdateList = "[Favorite] Update favorite list",
  AddImageToList = "[Favorite] Add image to list",
  RemoveImageFromList = "[Favorite] Remove image from list",
}

export interface FavoriteStore {
  lists: FavoriteList[];
}

export interface AddImageToFavoriteListPayload {
  id: string;
  image: Image;
}
export interface UpdatedFavoriteListPayload {
  id: string;
  name: "name" | "description";
  value: string;
}
export interface RemoveImageFromListPayload {
  id: string;
  imageId: string;
}
