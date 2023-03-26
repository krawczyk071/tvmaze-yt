import React, { useState } from "react";
import Alert from "./Alert";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchHandler = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <div className="searchbar">
      {alert ? <Alert message="Please enter sth" type="danger" /> : null}
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search For Tv Show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
