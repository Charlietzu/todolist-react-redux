import * as todosActions from "./todosActionTypes";

export const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case todosActions.ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    case todosActions.TOGGLE_TODO:
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
