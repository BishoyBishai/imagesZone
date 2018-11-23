import { AlbumStore, AlbumActionTypes } from "./album.model";
import { AlbumActions } from "./album.actions";

export const albumInitState: AlbumStore = {
  albumTag: null,
  imagesList: [],
  loading: false,
  error: null,
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
      };
    case AlbumActionTypes.AddImageAsFavorite: {
      const imagesList = state.imagesList.map(image => {
        if (image.id == action.payload.id) {
          return { ...image, isFavorite: true };
        }
        return image;
      });
      return { ...state, imagesList };
    }
    case AlbumActionTypes.RemoveImageFromFavorites: {
      const imagesList = state.imagesList.map(image => {
        if (image.id == action.payload) {
          return { ...image, isFavorite: false };
        }
        return image;
      });
      return { ...state, imagesList };
    }
  }
  return state;
}
