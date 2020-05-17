import * as filterActions from "./filterActionTypes";
import * as filterCategories from "./filterCategories";

export const initialState = filterCategories.SHOW_ALL;

export default function visibilityReducer(state = initialState, action) {
  switch (action.type) {
    case filterActions.SET_VISIBILITY_FILTER:
      /**if (action.payload.filter === filterCategories.SHOW_UNDONE) {
        return filterCategories.SHOW_UNDONE;
      } else if (action.payload.filter === filterCategories.SHOW_DONE) {
        return filterCategories.SHOW_DONE;
      } else {
        return filterCategories.SHOW_ALL;
      }*/
      return action.payload.filter;
    default:
      return state;
  }
}
