import React, { useContext, useEffect, useState } from "react";
import SignInOtherLinks from "./SignInOtherLinks";
import { Link } from "react-router-dom";
import { appContext } from "../../Context";
import SearchResults from "../searchResults";
export default function SearchEngineLogo() {
  const {
    setInputDataFun,
    inputData,
    searchObjs,
    setIsActiveSearch,
    isActiveSearchAndSignIn,
  } = useContext(appContext);

  function handleOnChange(event) {
    setInputDataFun(event);
  }
  const searchResultsOptions =
    searchObjs &&
    searchObjs.map((option) => (
      <SearchResults product={option} isActive={setIsActiveSearch} />
    ));
  return (
    <div className="searchbar-other-elements-div">
      <div className="searchengine-logo-div">
        <Link to={"/"}>
          <img
            className="walmart-logo"
            alt="Company Logo"
            src={require("./my-company-logo.png")}
          />
        </Link>
        <div className="search-bar--input-div">
          <input
            onChange={(event) => {
              handleOnChange(event);
            }}
            value={inputData}
            className="search-bar"
            type="text"
            placeholder="Search "
          />
          {isActiveSearchAndSignIn.isActiveSearch && (
            <div className="SearchResults-all-options">
              {searchResultsOptions}
            </div>
          )}
        </div>
      </div>
      <SignInOtherLinks />
    </div>
  );
}
