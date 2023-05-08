import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../Context";
import { nanoid } from "nanoid";
import Spinner from "../spinner";
import CartNoProductPage from "./cartNoProductPage";
import PlacedOrder from "./placedOrderAndSignUp";

import CartPageComponent from "./cartPageComponent";
const CartPage = () => {
  const { cartItems, emptyCart, activeAccount, setIsActiveSignIn } =
    useContext(appContext);
  const [spinner, setSpinner] = useState(false);
  const [showPlacedOrder, setShowPlacedOrder] = useState(false);
  function handleOrderPlacing() {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);

      emptyCart();
      setShowPlacedOrder(true);
    }, 2000);
  }
  const isActiveAccount = !activeAccount ? (
    <button
      onClick={() => {
        setIsActiveSignIn(true);
      }}
      className="cart--check-out-button"
    >
      login before proceed
    </button>
  ) : (
    <button onClick={handleOrderPlacing} className="cart--check-out-button">
      Proceed to checkout
    </button>
  );
  const allCartElements = cartItems.map((obj) => {
    return <CartPageComponent obj={obj} />;
  });

  const subTotal = () =>
    cartItems.reduce(
      (accumalator, element) => accumalator + element.price * element.quantity,
      0
    );
  if (cartItems.length > 0) {
    return (
      <div className="cart-page-div">
        {spinner && <Spinner />}
        <div className="flex-column">
          <div className="cart--subtotal">
            <span>SubTotal </span>{" "}
            <span className="cart--subtotal-text">
              {"$" + subTotal().toFixed(2)}
            </span>
          </div>
          {isActiveAccount}
        </div>
        <div>{allCartElements}</div>
      </div>
    );
  } else {
    const tagLine = "Thanks, Your order has been placed";
    const orderNumber = nanoid();
    const buttonText = "Continue Shopping";

    return (
      <div>
        {showPlacedOrder && (
          <PlacedOrder
            setFunction={setShowPlacedOrder}
            title={tagLine}
            orderNumber={orderNumber}
            buttonText={buttonText}
          />
        )}

        <CartNoProductPage />
      </div>
    );
  }
};

export default CartPage;
