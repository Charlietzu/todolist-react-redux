import React from "react";
import "./App.css";
import Form from "./components/form/index";
import TodosList from "./components/todosList/index";
import Filter from "./components/filter/index";

const App = () => (
  <>
    <Form />
    <TodosList />
    <Filter />
  </>
);

export default App;
