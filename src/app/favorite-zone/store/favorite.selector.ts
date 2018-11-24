import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoriteStore } from "./favorite.models";

const favoriteZoneSelector = createFeatureSelector<FavoriteStore>(
  "favorite-zones",
);
export const getFavoriteZones = createSelector(
  favoriteZoneSelector,
  state => {
    return state.zones;
  },
);
export const getCurrentZone = createSelector(
  favoriteZoneSelector,
  state => {
    return state.currentZone;
  },
);
export const getUpdateModalState = createSelector(
  favoriteZoneSelector,
  state => {
    return state.updateModal;
  },
);
export const getDeleteModalState = createSelector(
  favoriteZoneSelector,
  state => {
    return state.deleteModal;
  },
);
