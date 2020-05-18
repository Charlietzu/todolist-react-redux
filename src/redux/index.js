import todos from "./todos/index";
import visibilityFilter from "./visibility-filter/index";
import { combineReducers } from "redux";

/* Manual implementation of the combineReducers function:

  const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
}; */

export default combineReducers({
  todos,
  visibilityFilter,
});
