import * as todosActionsTypes from "./todosActionTypes";
import { v4 } from "uuid";

export function addTodo(text) {
  return {
    type: todosActionsTypes.ADD_TODO,
    payload: {
      id: v4(),
      text,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: todosActionsTypes.TOGGLE_TODO,
    payload: { id },
  };
}
