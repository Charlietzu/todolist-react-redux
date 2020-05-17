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

    {console.log(todos)}
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
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
