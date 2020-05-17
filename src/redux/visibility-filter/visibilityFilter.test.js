import visibilityReducer, { initialState } from "./index";
import { expect } from "chai";
import deepFreeze from "deep-freeze";
import * as filterActions from "./filterActionTypes";
import * as filterCategories from "./filterCategories";

it("visibilityReducer should be a function", () => {
  expect(visibilityReducer).to.be.a("function");
});

it("should show all todos", () => {
  /**I don't need to deepFreeze the "before" const because it's just a string. A string is considered a
   * primitive data type in JavaScript, and this data type is already immutable.
   */
  const before = filterCategories.SHOW_DONE;
  const action = deepFreeze({
    type: filterActions.SET_VISIBILITY_FILTER,
    payload: {
      filter: filterCategories.SHOW_ALL,
    },
  });
  const after = filterCategories.SHOW_ALL;
  expect(visibilityReducer(before, action)).to.be.equal(after);
});

it("should show just done todos", () => {
  const before = filterCategories.SHOW_ALL;
  const action = deepFreeze({
    type: filterActions.SET_VISIBILITY_FILTER,
    payload: {
      filter: filterCategories.SHOW_DONE,
    },
  });
  const after = filterCategories.SHOW_DONE;
  expect(visibilityReducer(before, action)).to.be.equal(after);
});

it("should show just undone todos", () => {
  const before = filterCategories.SHOW_ALL;
  const action = deepFreeze({
    type: filterActions.SET_VISIBILITY_FILTER,
    payload: {
      filter: filterCategories.SHOW_UNDONE,
    },
  });
  const after = filterCategories.SHOW_UNDONE;
  expect(visibilityReducer(before, action)).to.be.equal(after);
});

it("should return the latest state when action is unknown", () => {
  const before = filterCategories.SHOW_ALL;
  const action = deepFreeze({
    type: "ANYTHING",
    payload: {
      filter: filterCategories.SHOW_DONE,
    },
  });
  const after = filterCategories.SHOW_ALL;
  expect(visibilityReducer(before, action)).to.be.equal(after);
});

it("should return initial state if last state is undefined", () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = initialState;
  expect(visibilityReducer(before, action)).to.be.equal(after);
});
