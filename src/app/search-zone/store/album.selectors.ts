import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AlbumStore } from "./album.model";

const albumFeatureSelector = createFeatureSelector<AlbumStore>("albums");
export const getImagesZone = createSelector(
  albumFeatureSelector,
  state => {
    return state.imagesZone;
  },
);
export const getModalState = createSelector(
  albumFeatureSelector,
  state => {
    return state.modalIsOpen;
  },
);
export const getCurrentImage = createSelector(
  albumFeatureSelector,
  state => {
    return state.currentImage;
  },
);
export const getLoadingState = createSelector(
  albumFeatureSelector,
  state => {
    return state.loading;
  },
);
