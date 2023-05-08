import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { appContext } from "../Context";
import QuantityIncreDecreBtn from "./quantityIncreDecreBtn";
import Spinner from "./spinner";

const ProductDescription = () => {
  const { allProducts, addToCartItems } = useContext(appContext);
  const { id } = useParams();

  let objResultArray = allProducts.filter((ele) => ele.id == id);
  const objResult = objResultArray[0];

  const [productQuantity, setProductQuantity] = useState(1);

  function incrementProductQuantity() {
    productQuantity < 9 && setProductQuantity((prev) => prev + 1);
  }
  function decrementProductQuantity() {
    productQuantity > 1 && setProductQuantity((prev) => prev - 1);
  }
  if (objResultArray[0]) {
    return (
      <div class="product--description-page">
        <img
          className="description--product-image"
          src={objResult.image || objResult.images[0]}
          alt={"Product Image"}
        ></img>
        <div className="descption--lines-div">
          <h1 className="description--title">{objResult.title}</h1>
          <h2 className="description--category">
            Category: {objResult.category}
          </h2>
          <p className="description--description-line">
            Description: {objResult.description}
          </p>
          {/* ===========================aside================================= */}
          <aside className="add-cart-price-rating-div flex-row">
            <div className="description--text-svg-divs flex-column">
              <div className="description--rating-div flex-row">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="description--svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12.025 2c-.455 0-.805.22-1.014.399-.22.189-.395.424-.512.659a1 1 0 0 0-.05.119L8.662 8.313H2.681c-.455 0-.805.22-1.014.399a2.14 2.14 0 0 0-.512.66c-.209.416-.18.858-.07 1.189.1.297.305.627.65.842l4.614 3.714-1.46 5.615c-.148.38-.115.769-.016 1.067.11.33.353.7.77.91a1.804 1.804 0 0 0 1.652 0 1.01 1.01 0 0 0 .134-.081l4.715-3.368 4.548 3.328c.404.355.847.353.999.352h.032c.146.001.561.003.952-.313.331-.215.53-.537.628-.828a1.58 1.58 0 0 0-.026-1.093l-1.68-5.484 4.78-3.869a.999.999 0 0 0 .265-.33l.021-.043c.11-.215.337-.663.337-1.161a1 1 0 0 0-.106-.448 2.141 2.141 0 0 0-.512-.659c-.209-.18-.559-.399-1.013-.399h-5.87l-1.905-5.155a.994.994 0 0 0-.043-.1 2.141 2.141 0 0 0-.512-.66c-.21-.179-.56-.398-1.014-.398Z"
                      fill="#e5c100"
                    ></path>
                  </g>
                </svg>
                <p className="description--rating">
                  {objResult.rating.rate || objResult.rating} / 5
                </p>
              </div>

              <div className="description--price-div flex-row">
                <svg
                  fill="#118C4F"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#118C4F"
                  className="description--svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M541.7 768v-45.3c46.3-2.4 81.5-15 108.7-37.8 27.2-22.8 40.8-53.1 40.8-88.2 0-37.8-11-65.7-35.3-83.4-24.6-20.1-59.8-35.4-111.6-45.3h-2.6V351.8c35.3 5.1 65.3 15 95.1 35.4l43.6-55.5c-43.6-27.9-89.9-42.9-138.8-45.3V256h-40.8v30.3c-40.8 2.4-76.3 15-103.5 37.8-27.2 22.8-40.8 53.1-40.8 88.2s11 63 35.3 80.7c21.7 17.7 59.8 32.7 108.7 42.9v118.5c-38.2-5.1-76.3-22.8-114.2-53.1l-48.9 53.1c48.9 40.5 103.5 63 163.3 68.1V768h41zm2.6-219.6c27.2 7.5 43.6 15 54.4 22.8 8.1 10.2 13.6 20.1 13.6 35.4s-5.5 25.2-19.1 35.4c-13.6 10.2-30.1 15-48.9 17.7V548.4zM449.2 440c-8.1-7.5-13.6-20.1-13.6-32.7 0-15 5.5-25.2 16.2-35.4 13.6-10.2 27.2-15 48.9-17.7v108.6c-27.2-7.8-43.4-15.3-51.5-22.8z"></path>
                  </g>
                </svg>
                <p className="description--price">{objResult.price}</p>
              </div>
              <QuantityIncreDecreBtn
                data={{
                  productQuantity,
                  incrementProductQuantity,
                  decrementProductQuantity,
                }}
              />
            </div>
            <div className="add-to-cart--div">
              <button
                onClick={() => {
                  addToCartItems(objResult, productQuantity);
                }}
                className="add-to-cart--button"
              >
                Add to Cart
              </button>
            </div>
          </aside>
        </div>
      </div>
    );
  } else {
    <Spinner />;
  }
};

export default ProductDescription;
