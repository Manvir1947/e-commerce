import React, { useState, useContext } from "react";
import ProductHeart from "./productHeart";
import { appContext } from "../Context";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [hover, setHover] = useState(false);
  const { setFavoriteItem, favoriteItems } = useContext(appContext);
  const isFound = favoriteItems.filter((ele) => ele == product);

  function handleMouseOver() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }
  function funAddFavoriteItem(product) {
    setFavoriteItem(product);
  }
  if (product) {
    return (
      <div
        className="single-product-main-section-div"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseLeave}
      >
        <div className="product-heart-div">
          {hover && !isFound[0] && (
            <div
              onClick={() => {
                funAddFavoriteItem(product);
              }}
            >
              <ProductHeart />
            </div>
          )}
          {isFound[0] && (
            <div
              onClick={() => {
                funAddFavoriteItem(product);
              }}
            >
              {" "}
              <ProductHeart className={"heart-full"} />
            </div>
          )}
        </div>
        <Link className="single-product-link" to={`/${product.id}`}>
          <div className="single-product-Image-div flex-column">
            <img
              src={product.image || product.images[0]}
              className="single-product-img"
              alt="Product Image"
            />

            <h2 className="single-product-title">{product.title}</h2>
            <h3 className="single-product-price">
              {"$" + product.price.toFixed(2)}
            </h3>
          </div>
        </Link>
      </div>
    );
  }
};

export default Product;
