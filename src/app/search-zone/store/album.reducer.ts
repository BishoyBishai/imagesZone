import { AlbumStore, AlbumActionTypes } from "./album.model";
import { AlbumActions } from "./album.actions";

export const albumInitState: AlbumStore = {
  albumTag: null,
  imagesList: [],
  currentImage: null,
  loading: false,
  error: null,
  modalIsOpen: false,
};

export function albumReducer(
  state: AlbumStore = albumInitState,
  action: AlbumActions,
): AlbumStore {
  switch (action.type) {
    case AlbumActionTypes.Load:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AlbumActionTypes.LoadSuccess:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case AlbumActionTypes.LoadFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AlbumActionTypes.AddAlbumImages:
      return {
        ...state,
        imagesList: action.payload,
        loading: false,
        error: null,
      };
    case AlbumActionTypes.ChangeCurrentImage: {
      return {
        ...state,
        currentImage: action.payload,
      };
    }
    case AlbumActionTypes.ToggleAddToListModal: {
      return { ...state, modalIsOpen: action.payload };
    }
  }
  return state;
}
