import React, { useState, useContext, useEffect } from "react";
import CartRemoveOpenbin from "./cartRemoveOpenbin";
import CartRemoveClosedbin from "./CartRemoveClosedbin";
import QuantityIncreDecreBtn from "../quantityIncreDecreBtn";
import { appContext } from "../../Context";

const CartPageComponent = ({ obj }) => {
  const { cartQuantityHandler } = useContext(appContext);
  const img = obj.image ? obj.image : obj.images[0];
  const [hover, setHover] = useState(false);

  const removeBin = () =>
    hover ? (
      <CartRemoveOpenbin handleMouseLeave={handleMouseLeave} obj={obj} />
    ) : (
      <CartRemoveClosedbin handleMouseOver={handleMouseOver} />
    );
  const [productQuantity, setProductQuantity] = useState(obj.quantity);

  function incrementProductQuantity() {
    productQuantity < 9 && setProductQuantity((prev) => prev + 1);
  }
  function decrementProductQuantity() {
    productQuantity > 1 && setProductQuantity((prev) => prev - 1);
  }

  useEffect(() => {
    cartQuantityHandler(obj, productQuantity);
  }, [productQuantity]);

  function handleMouseOver() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }
  return (
    <div className="cart-item-div flex-row">
      {removeBin()}
      <img src={img} alt="Product Image" className="cart--product-img" />
      <div className="cart--product-description-div flex-column">
        <h1 className="cart--product-title">{obj.title}</h1>
        <p className="cart--product-price">{"$" + obj.price.toFixed(2)}</p>
        <p className="cart--quantity">Quantity: {obj.quantity}</p>
        <div>
          {
            <QuantityIncreDecreBtn
              data={{
                incrementProductQuantity,
                decrementProductQuantity,
                productQuantity,
              }}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default CartPageComponent;
