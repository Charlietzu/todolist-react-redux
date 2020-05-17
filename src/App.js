import React from "react";
import { connect } from "react-redux";
import "./App.css";
import * as todosActions from "./redux/todos/todosActionsCreators";

const App = ({ todos, handleAddTodo }) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input type="text" name="todo" />
      <button type="submit">Add Item</button>
    </form>

    <ul>
      {todos.map((todo) => (
        <li
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
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
