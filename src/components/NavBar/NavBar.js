import React from "react";
import SearchEngineLogo from "./SearchEngineLogo";
import { Route, Routes } from "react-router-dom";

import NavOptions from "./navOptions/NavOptions";

const NavBar = () => {
  return (
    <section className="nav-bar section-margin">
      <SearchEngineLogo />
      <Routes>
        <Route path="/" element={<NavOptions />}></Route>
      </Routes>
    </section>
  );
};

export default NavBar;
