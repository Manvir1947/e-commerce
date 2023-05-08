import React from "react";
// import PromoCard from "./components/PromoCard";
import Featuring from "./components/featuringSlider/Featuring";
import SectionProductCategory from "./components/ProductCategoryFolder/sectionProductCategory";
import BestDealsSection from "./components/bestDealsFolder/bestDealsSection";
import SectionAllProducts from "./components/allProductsFolder/sectionAllProducts.js";
import { Route, Routes, Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="app-container">
      <Featuring />
      <SectionProductCategory />
      <BestDealsSection />
      <SectionAllProducts />
    </main>
  );
};

export default Main;
