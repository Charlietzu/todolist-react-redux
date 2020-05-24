import React from "react";

const FilterLink = ({ action, label, activeFilter, handleFilter }) => {
  if (action === activeFilter) {
    return <span style={{ marginRight: 10 }}>{label}</span>;
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" onClick={handleFilter(action)} style={{ marginRight: 10 }}>
      {label}
    </a>
  );
};

export default FilterLink;
