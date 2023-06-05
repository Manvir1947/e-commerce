import React from "react";
import Product from "../ProductElement";

const CategoryPagesCreator = (props) => {
  const { categoryName, data } = props.loader;
  const favoriteCategory = () => {
    if (categoryName == "Favorite Products" && data.length < 1) {
      return (
        <div className="no-favorite-item-selected">
          No Favorite Item is selected! To select click on heart icon above a
          product image
        </div>
      );
    }
  };

  const products = data.map((ele) => <Product product={ele} />);
  return (
    <section className="category-page app-container">
      <header className="category-page-title-div">
        <h1 className="category-page--title-name">{categoryName}</h1>
        <h2 className="category-page--results-title">Results</h2>
      </header>
      <div className="category-page--products-div">{products}</div>
      {favoriteCategory()}
    </section>
  );
};

export default CategoryPagesCreator;
