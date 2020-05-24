import React from "react";
import { connect } from "react-redux";
import * as todosActions from "../../redux/todos/todosActionsCreators";
import * as filterCategories from "../../redux/visibility-filter/filterCategories";

export const TodosList = ({ todos, handleToggleTodo, activeFilter }) => (
  <ul>
    {getVisibleTodos(todos, activeFilter).map((todo) => (
      <li
        onClick={handleToggleTodo(todo.id)}
        key={todo.id}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

function getVisibleTodos(todos, activeFilter) {
  /*
  const filterItems = {
    [filterCategories.SHOW_ALL]: todos,
    [filterCategories.SHOW_DONE]: todos.filter((todo) => todo.completed),
    [filterCategories.SHOW_UNDONE]: todos.filter((todo) => !todo.completed),
  };
  return filterItems[activeFilter];
  */

  //Here, we're doing the same thing as above
  return {
    [filterCategories.SHOW_ALL]: todos,
    [filterCategories.SHOW_DONE]: todos.filter((todo) => todo.completed),
    [filterCategories.SHOW_UNDONE]: todos.filter((todo) => !todo.completed),
  }[activeFilter];

  /* We can also write this function using a switch.
  switch (activeFilter) {
    case filterCategories.SHOW_DONE:
      return todos.filter((todo) => todo.completed);
    case filterCategories.SHOW_UNDONE:
      return todos.filter((todo) => !todo.completed);
    //The default case will also serve for the SHOW_ALL filter.
    default:
      return todos;
  }
  */
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  /**we created a function inside a function because when we call it in the onClick button(in the <li>) it must return a function,
   * and by calling handleToggleTodo(id) it would return an object, not a function, so, we put a function inside a function, so
   * the "external" function returns another function. it is called "closure".
   */
  handleToggleTodo: (id) => (e) => {
    dispatch(todosActions.toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
