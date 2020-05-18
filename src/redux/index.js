import todosReducer from "./todos/index";
import visibilityReducer from "./visibility-filter/index";

const rootReducer = (state = {}, action) => {
  return {
    todos: todosReducer(state.todos, action),
    visibilityFilter: visibilityReducer(state.visibilityFilter, action),
  };
};

export default rootReducer;
