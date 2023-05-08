import React from "react";
import { Route, Routes } from "react-router-dom";
import Clothings from "./allNavPages/Clothings";
import ElectricalAppliances from "./allNavPages/ElectricalAppliances";
import StoreFinder from "./allNavPages/StoreFinder";
import SignIn from "./allNavPages/SignIn";
import Cart from "./allNavPages/Cart";
import Flyers from "./allNavPages/Flyers";
import Deals from "./allNavPages/Deals";
import ProductLinks from "./ProductLinks";

const NavOptions = () => {
  return (
    <div className="all-navbar-links-div">
      <div className="all-navbar-links flex-row">
        <ProductLinks />
      </div>

      <div>
        <Routes>
          <Route path="/clothing" element={<Clothings />} />
          <Route
            path="/electricalAppliances"
            element={<ElectricalAppliances />}
          />
          <Route path="/deals" element={<Deals />} />
          <Route path="/storeFinder" element={<StoreFinder />} />
        </Routes>
      </div>
    </div>
  );
};

export default NavOptions;
