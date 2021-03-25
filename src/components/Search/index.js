import React from "react";

function Search(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          props.handleInputChange(event.target.value);
        }}
      />
    </div>
  )
}

export default Search;