import { FavoriteStore, ActionFavoriteTypes } from "./favorite.models";
import { FavoriteActions } from "./favorite.actions";

const initialFavoriteStore: FavoriteStore = {
  zones: [],
  currentZone: null,
  updateModal: false,
  deleteModal: false,
};

const favoriteReducer = (
  state: FavoriteStore = initialFavoriteStore,
  action: FavoriteActions,
): FavoriteStore => {
  switch (action.type) {
    case ActionFavoriteTypes.AddZone:
      return {
        ...state,
        zones: [action.payload, ...state.zones],
        currentZone: action.payload,
      };
    case ActionFavoriteTypes.RemoveZone:
      return {
        ...state,
        zones: state.zones.filter(zone => zone.id !== action.payload),
      };
    case ActionFavoriteTypes.AddImageToZone:
      return {
        ...state,
        zones: state.zones.map((zone, i) =>
          zone.id !== action.payload.id
            ? zone
            : {
                ...zone,
                images: [action.payload.image, ...state.zones[i].images],
              },
        ),
      };
    case ActionFavoriteTypes.RemoveImageFromZone:
      return {
        ...state,
        zones: state.zones.map((zone, i) =>
          zone.id !== action.payload.id
            ? zone
            : {
                ...zone,
                images: state.zones[i].images.filter(
                  img => img.id !== action.payload.imageId,
                ),
              },
        ),
      };
    case ActionFavoriteTypes.UpdateZone:
      return {
        ...state,
        zones: state.zones.map((zone, i) =>
          zone.id !== action.payload.id
            ? zone
            : { ...action.payload, images: state.zones[i].images },
        ),
      };
    case ActionFavoriteTypes.ChangeCurrentZone:
      return {
        ...state,
        currentZone: action.payload,
      };
    case ActionFavoriteTypes.CreateInitZone:
      return {
        ...state,
        currentZone: {
          id: "0",
          images: [],
          name: "",
          description: "",
        },
      };
    case ActionFavoriteTypes.ToggleUpdateModal:
      return {
        ...state,
        updateModal: action.payload,
      };
    case ActionFavoriteTypes.ToggleDeleteModal:
      return {
        ...state,
        deleteModal: action.payload,
      };
  }
  return state;
};

export default favoriteReducer;
