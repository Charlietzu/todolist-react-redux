import * as todosActionsTypes from "./todosActionTypes";
import createReducer from "../createReducer";
export const initialState = [];

const todosReducer = createReducer(initialState, {
  [todosActionsTypes.ADD_TODO]: (state, action) =>
    state.concat({
      id: action.payload.id,
      text: action.payload.text,
      completed: false,
    }),
  [todosActionsTypes.TOGGLE_TODO]: (state, action) =>
    state.map((todo) => {
      if (todo.id !== action.payload.id) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed,
      };
    }),
});

/*
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case todosActionsTypes.ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    case todosActionsTypes.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
}
*/

export default todosReducer;
