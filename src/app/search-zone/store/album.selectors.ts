import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AlbumStore } from "./album.model";

const albumFeatureSelector = createFeatureSelector<AlbumStore>("albums");
export const getImagesList = createSelector(
  albumFeatureSelector,
  state => {
    return state.imagesList;
  },
);
