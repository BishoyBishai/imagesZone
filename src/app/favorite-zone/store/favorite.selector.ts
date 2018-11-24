import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoriteStore } from "./favorite.models";

const favoriteListSelector = createFeatureSelector<FavoriteStore>(
  "favorite-lists",
);
export const getFavoriteLists = createSelector(
  favoriteListSelector,
  state => {
    return state.lists;
  },
);
export const getCurrentList = createSelector(
  favoriteListSelector,
  state => {
    return state.currentList;
  },
);
