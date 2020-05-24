import React from "react";
import { connect } from "react-redux";
import * as filterCategories from "../../redux/visibility-filter/filterCategories";
import { setVisibilityFilter } from "../../redux/visibility-filter/filterActionCreators";

export const Filter = ({ activeFilter, handleFilter }) => (
  <>
    <h3>Show</h3>
    {filterItems.map((item) => {
      if (item.action === activeFilter) {
        return (
          <span key={item.action} style={{ marginRight: 10 }}>
            {item.label}
          </span>
        );
      }

      return (
        <a
          href="teste"
          key={item.action}
          onClick={handleFilter(item.action)}
          style={{ marginRight: 10 }}
        >
          {item.label}
        </a>
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
