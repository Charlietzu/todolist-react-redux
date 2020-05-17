import React from "react";
import { connect } from "react-redux";
import "./App.css";
import * as todosActions from "./redux/todos/todosActionsCreators";

const App = ({ todos, handleAddTodo, handleToggleTodo }) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input type="text" name="todo" />
      <button type="submit">Add Item</button>
    </form>

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

    <div>
      <h3>Show</h3>
      <span href="#">All</span> | <a href="teste">Done</a> |{" "}
      <a href="teste">To do</a>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault();
    dispatch(todosActions.addTodo(e.target.todo.value));
    e.target.todo.value = "";
  },
  /**we created a function inside a function because when we call it in the onClick button(in the <li>) it must return a function,
   * and by calling handleToggleTodo(id) it would return an object, not a function, so, we put a function inside a function, so
   * the "external" function returns another function. it is called "closure".
   */
  handleToggleTodo: (id) => (e) => {
    dispatch(todosActions.toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
