import { FavoriteStore, ActionFavoriteTypes } from "./favorite.models";
import { FavoriteActions } from "./favorite.actions";

const initialFavoriteStore: FavoriteStore = {
  lists: [
    {
      name: "beshoy",
      id: "bishoy",
      images: [],
    },
    {
      name: "semsem",
      id: "semsem",
      images: [],
    },
  ],
};

const favoriteReducer = (
  state: FavoriteStore = initialFavoriteStore,
  action: FavoriteActions,
): FavoriteStore => {
  switch (action.type) {
    case ActionFavoriteTypes.AddList:
      return { ...state, lists: [action.payload, ...state.lists] };
    case ActionFavoriteTypes.RemoveList:
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.payload),
      };
    case ActionFavoriteTypes.AddImageToList:
      return {
        ...state,
        lists: state.lists.map((list, i) =>
          list.id !== action.payload.id
            ? list
            : {
                ...list,
                images: [action.payload.image, ...state.lists[i].images],
              },
        ),
      };
    case ActionFavoriteTypes.RemoveImageFromList:
      return {
        ...state,
        lists: state.lists.map((list, i) =>
          list.id !== action.payload.id
            ? list
            : {
                ...list,
                images: state.lists[i].images.filter(
                  img => img.id !== action.payload.imageId,
                ),
              },
        ),
      };
    case ActionFavoriteTypes.UpdateList:
      return {
        ...state,
        lists: state.lists.map((list, i) =>
          list.id !== action.payload.id
            ? list
            : {
                ...list,
                [action.payload.name]: action.payload.value,
              },
        ),
      };
  }
  return state;
};

export default favoriteReducer;
