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
          />
          {isActiveSearchAndSignIn.isActiveSearch && (
            <div className="SearchResults-all-options">
              {searchResultsOptions}
            </div>
          )}
        </div>

        {/* <button className="search-bar--button">
          <svg
            viewBox="0 0 24 24"
            className="search-icon"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.5 17c1.71 0 3.287-.573 4.55-1.537l4.743 4.744a1 1 0 0 0 1.414-1.414l-4.744-4.744A7.5 7.5 0 1 0 9.5 17zM15 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                fill="#FFFFFF"
              ></path>
            </g>
          </svg>
        </button> */}
      </div>
      <SignInOtherLinks />
    </div>
  );
}
