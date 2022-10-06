import * as ACTION_TYPES from '../actions/action_type';
import { IState, IAction } from '../types';

export const episodeInitialState: IState = {
  list: [],
  error: null,
};

export const episodeReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
