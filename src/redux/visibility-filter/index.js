import * as filterActionsTypes from "./filterActionTypes";
import * as filterCategories from "./filterCategories";
import createReducer from "../createReducer";

export const initialState = filterCategories.SHOW_ALL;

const visibilityReducer = createReducer(initialState, {
  [filterActionsTypes.SET_VISIBILITY_FILTER]: (state, action) =>
    action.payload.filter,
});

/*
export default function visibilityReducer(state = initialState, action) {
  switch (action.type) {
    case filterActions.SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
}
*/

export default visibilityReducer;
