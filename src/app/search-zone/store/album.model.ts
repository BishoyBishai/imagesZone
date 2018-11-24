import { AppState } from "./../../store/app.models";
import { UnsplashImage } from "./unsplash.model";
export interface AlbumStore {
  albumTag: string; // store the search value
  imagesZone: Image[];
  currentImage:Image;
  loading: boolean;
  error: any;
  modalIsOpen: boolean;
  total_pages: number;
  total: number;
}
export interface Image {
  id: string;
  src: string;
  isFavorite?: boolean;
  description: string;
  username: string;
  portfolio_url: string;
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
  ChangeCurrentImage = "[Album] Change current Image",
  ToggleAddToZoneModal = "[Album] Toggle add to zone modal",
}

export interface AlbumServiceResponse {
  results: UnsplashImage[];
  total_pages: number;
  total: number;
}
