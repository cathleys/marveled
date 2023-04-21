import React from "react";
import Select from "react-select";
import { options, customStyles } from "./search-bar.style";

export function SearchBar() {
  return (
    <Select
      placeholder="Search character..."
      options={options}
      styles={customStyles}
      isSearchable
      isClearable
    />
  );
}
