import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../../Context";
import DotesOptionSvg from "./dotesOptionSvg";
import DownArrowSvg from "./downArrowSvg";
const AccountNameOptions = (props) => {
  const { downArrowBool, setDownArrowBool } = useContext(appContext);
  const dotesOrDownArrow = downArrowBool ? (
    <div
      onClick={() => {
        setDownArrowBool(false);
      }}
    >
      <DownArrowSvg />
    </div>
  ) : (
    <div
      onClick={() => {
        setDownArrowBool(true);
      }}
    >
      <DotesOptionSvg />
    </div>
  );

  return (
    <div className="account-name-options--div flex-row">
      <div>
        <Link className="search-bar--navbar-links nav-bar--account-name" to="/">
          Hi, {props.activeAccount.firstName}
        </Link>
      </div>
      {dotesOrDownArrow}
    </div>
  );
};

export default AccountNameOptions;
