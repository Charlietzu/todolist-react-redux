import todosReducer, { initialState } from "./index";
import { expect } from "chai";
import deepFreeze from "deep-freeze";
import * as todosActions from "./todosActionTypes";

it("todosReducer should be a function", () => {
  expect(todosReducer).to.be.a("function");
});

it("should add a todo item", () => {
  const before = deepFreeze([]);
  const action = deepFreeze({
    type: todosActions.ADD_TODO,
    payload: {
      id: 0,
      text: "Test",
    },
  });
  const after = [
    {
      id: 0,
      text: "Test",
      completed: false,
    },
  ];
  expect(todosReducer(before, action)).to.be.deep.equal(after);
});

it("should add another todo item", () => {
  const before = deepFreeze([
    {
      id: 0,
      text: "Test",
      completed: false,
    },
  ]);
  const action = deepFreeze({
    type: todosActions.ADD_TODO,
    payload: {
      id: 1,
      text: "Another test",
    },
  });
  const after = [
    {
      id: 0,
      text: "Test",
      completed: false,
    },
    {
      id: 1,
      text: "Another test",
      completed: false,
    },
  ];
  expect(todosReducer(before, action)).to.be.deep.equal(after);
});

it("should toggle first todo", () => {
  const before = deepFreeze([
    {
      id: 0,
      text: "Test",
      completed: false,
    },
    {
      id: 1,
      text: "Another test",
      completed: false,
    },
  ]);
  const action = deepFreeze({
    type: todosActions.TOGGLE_TODO,
    payload: { id: 0 },
  });
  const after = [
    {
      id: 0,
      text: "Test",
      completed: true,
    },
    {
      id: 1,
      text: "Another test",
      completed: false,
    },
  ];
  expect(todosReducer(before, action)).to.be.deep.equal(after);
});

it("should toggle another todo", () => {
  const before = deepFreeze([
    {
      id: 0,
      text: "Test",
      completed: true,
    },
    {
      id: 1,
      text: "Another test",
      completed: false,
    },
  ]);
  const action = deepFreeze({
    type: todosActions.TOGGLE_TODO,
    payload: { id: 1 },
  });
  const after = [
    {
      id: 0,
      text: "Test",
      completed: true,
    },
    {
      id: 1,
      text: "Another test",
      completed: true,
    },
  ];
  expect(todosReducer(before, action)).to.be.deep.equal(after);
});

it("should return the latest state when action is unknown", () => {
  const before = deepFreeze([
    {
      id: 0,
      text: "Test",
      completed: true,
    },
    {
      id: 1,
      text: "Another test",
      completed: false,
    },
  ]);
  const action = deepFreeze({
    type: "ANYTHING",
  });
  const after = [
    {
      id: 0,
      text: "Test",
      completed: true,
    },
    {
      id: 1,
      text: "Another test",
      completed: false,
    },
  ];
  expect(todosReducer(before, action)).to.be.deep.equal(after);
});

it("should return initial state if last state is undefined", () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = initialState;
  expect(todosReducer(before, action)).to.be.deep.equal(after);
});
