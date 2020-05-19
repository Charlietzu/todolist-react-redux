import React from "react";
import { connect } from "react-redux";
import * as todosActions from "../../redux/todos/todosActionsCreators";

export const TodosList = ({ todos, handleToggleTodo }) => (
  <ul>
    {todos.map((todo) => (
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

const mapStateToProps = (state) => ({
  todos: state.todos,
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
