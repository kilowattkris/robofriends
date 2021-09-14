import React from "react";

const SearchBar = ({setSearch}) => {
  return <div className="SearchBar">
    <input className="rounded p-1 m-2 text-center border" style={{borderColor: "#0ccac4"}} type="search" placeholder="Search" onChange={(event) => setSearch(event.target.value)} />
  </div>
};

export default SearchBar;