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
  currentList: null,
};

const favoriteReducer = (
  state: FavoriteStore = initialFavoriteStore,
  action: FavoriteActions,
): FavoriteStore => {
  switch (action.type) {
    case ActionFavoriteTypes.AddList:
      return {
        ...state,
        lists: [action.payload, ...state.lists],
        currentList: action.payload,
      };
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
          list.id !== action.payload.id ? list : action.payload,
        ),
      };
    case ActionFavoriteTypes.ChangeCurrentList:
      return {
        ...state,
        currentList: action.payload,
      };
    case ActionFavoriteTypes.CreateInitList:
      return {
        ...state,
        currentList: {
          id: "0",
          images: [],
          name: "",
          description: "",
        },
      };
  }
  return state;
};

export default favoriteReducer;
