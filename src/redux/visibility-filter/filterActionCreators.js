import * as filterActions from "./filterActionTypes";

export function setVisibilityFilter(filter) {
  return {
    type: filterActions.SET_VISIBILITY_FILTER,
    payload: {
      filter,
    },
  };
}
