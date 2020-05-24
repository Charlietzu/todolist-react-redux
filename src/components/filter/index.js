import React from "react";
import { connect } from "react-redux";
import * as filterCategories from "../../redux/visibility-filter/filterCategories";
import { setVisibilityFilter } from "../../redux/visibility-filter/filterActionCreators";
import FilterLink from "./filterLink";

export const Filter = ({ activeFilter, handleFilter }) => (
  <>
    <h3>Show</h3>
    {filterItems.map((item) => {
      return (
        <FilterLink
          key={item.action}
          action={item.action}
          label={item.label}
          activeFilter={activeFilter}
          handleFilter={handleFilter}
        />
      );
    })}
  </>
);

const filterItems = [
  {
    label: "All",
    action: filterCategories.SHOW_ALL,
  },
  {
    label: "Done",
    action: filterCategories.SHOW_DONE,
  },
  {
    label: "To do",
    action: filterCategories.SHOW_UNDONE,
  },
];

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => (e) => {
    e.preventDefault();
    dispatch(setVisibilityFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
