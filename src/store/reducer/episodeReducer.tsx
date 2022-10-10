import * as ACTION_TYPES from '../actions/action_type';
import { IState, IAction } from '../types';

export const episodeInitialState: IState = {
  list: [],
  favorites: [],
  error: null,
};

export const episodeReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return {
        ...state,
        list: action.payload,
      };
    case ACTION_TYPES.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case ACTION_TYPES.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};
