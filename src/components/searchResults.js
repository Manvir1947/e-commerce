import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ product, isActive }) => {
  return (
    <Link to={`/${product.id}`} onClick={() => isActive(false)}>
      <div className="searchResult-option-div">
        <img
          className="searchResultsImage"
          src={product.image || product.images[0]}
          alt="result img"
        />

        <h1 className="searchResultsImage-title">{product.title}</h1>
      </div>
    </Link>
  );
};

export default SearchResults;
