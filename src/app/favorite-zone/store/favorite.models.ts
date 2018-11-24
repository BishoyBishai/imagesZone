import { Image } from "./../../search-zone/store/album.model";
export interface FavoriteZone {
  id: string;
  name: string;
  description?: string;
  images: Image[];
}

export enum ActionFavoriteTypes {
  Load = "[Favorite] Load favorite zones",
  LoadSuccess = "[Favorite] Load Success",
  AddZone = "[Favorite] Add favorite zone",
  RemoveZone = "[Favorite] Remove favorite zone",
  UpdateZone = "[Favorite] Update favorite zone",
  AddImageToZone = "[Favorite] Add image to zone",
  RemoveImageFromZone = "[Favorite] Remove image from zone",
  ChangeCurrentZone = "[Favorite] Change current zone",
  CreateInitZone = "[Favorite] Create initial zone",
  ToggleUpdateModal = "[Favorite] Toggle update modal",
  ToggleDeleteModal = "[Favorite] Toggle delete modal",
}

export interface FavoriteStore {
  zones: FavoriteZone[];
  currentZone: FavoriteZone;
  updateModal: boolean;
  deleteModal: boolean;
}

export interface AddImageToFavoriteZonePayload {
  id: string;
  image: Image;
}
export interface UpdatedFavoriteZonePayload {
  id: string;
  name: "name" | "description";
  value: string;
}
export interface RemoveImageFromZonePayload {
  id: string;
  imageId: string;
}
