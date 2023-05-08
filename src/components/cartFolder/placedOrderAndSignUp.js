import React from "react";

import { Link } from "react-router-dom";
import TickSvgPage from "../tickSvgPage";
const PlacedOrder = (props) => {
  return (
    <div className="placed--page-hero flex-row">
      <div className="placed--order-div flex-column">
        <div>
          <TickSvgPage />
        </div>
        <h1 className="placed-order--title">{props.title}</h1>
        {props.orderNumber && (
          <h2 className="placed-order--order-number">
            Order Number :{" "}
            <span className="placed-order-number">{props.orderNumber}</span>
          </h2>
        )}
        <Link to={"/"} className="continue-shopping--btn">
          <button
            onClick={() => {
              props.setFunction(false);
              if (props.setIsActiveSignIn) {
                props.setIsActiveSignIn(true);
              }
            }}
            className="continue-shopping--btn"
          >
            {props.buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlacedOrder;
