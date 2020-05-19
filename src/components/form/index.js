import React from "react";
import { connect } from "react-redux";
import * as todosActions from "../../redux/todos/todosActionsCreators";

export const Form = ({ handleAddTodo }) => (
  <form onSubmit={handleAddTodo}>
    <input type="text" name="todo" />
    <button type="submit">Add Item</button>
  </form>
);

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault();
    dispatch(todosActions.addTodo(e.target.todo.value));
    e.target.todo.value = "";
  },
});

export default connect(null, mapDispatchToProps)(Form);
