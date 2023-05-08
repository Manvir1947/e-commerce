import React from "react";

const QuantityIncreDecreBtn = (props) => {
  const {
    incrementProductQuantity,
    decrementProductQuantity,
    productQuantity,
  } = props.data;

  return (
    <div className="description-page--quantity-buttons-div">
      <h2
        onClick={incrementProductQuantity}
        className="des-increment-product-num des-increment-decrement-signs flex-row"
      >
        +
      </h2>
      <p className="des-product-quantity">{productQuantity}</p>
      <h2
        onClick={decrementProductQuantity}
        className="des-decrement-product-num des-increment-decrement-signs flex-row"
      >
        -
      </h2>
    </div>
  );
};

export default QuantityIncreDecreBtn;
