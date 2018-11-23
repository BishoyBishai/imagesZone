import { AppState } from "./../../store/app.models";
export interface AlbumStore {
  albumTag: string; // store the search value
  imagesList: Image[];
  loading: boolean;
  error: any;
}
export interface Image {
  id: string;
  src: string;
  isFavorite:boolean;
}

// extends global state for lazy loading
export interface State extends AppState {
  albums: AlbumStore;
}

export enum AlbumActionTypes {
  Load = "[Album] Album load",
  LoadSuccess = "[Album] Album Success",
  LoadFail = "[Album] Album Fail",
  AddAlbumImages = "[Album] Add album images",
  AddImageAsFavorite = "[Album] Add image as favorite",
  RemoveImageFromFavorites = "[Album] Remove image from favorites list",
}
