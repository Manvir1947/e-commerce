import React from "react";

const PromoCard = () => {
  return (
    <div className="promo-card-div">
      <h2 className="promo-title">New to Walmart</h2>
      <h3 className="promo-card">
        Use promo code SAVETIME60* to get $15 off your first 4 online grocery
        orders.
      </h3>
      <span className="promo-expiry">
        Expires Mar 31, 2023, additional conditions apply.
      </span>
    </div>
  );
};

export default PromoCard;
