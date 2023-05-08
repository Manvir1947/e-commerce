import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../Context";
import Product from "../ProductElement";

import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
const nanoId = nanoid();
const SectionAllProducts = () => {
  const contextData = useContext(appContext);
  const { tenRandomElements, data } = contextData;
  const products = data.products;

  const [randomProductElements, setRandomProductElements] = useState([]);

  useEffect(() => {
    const items = tenRandomElements(products, 7);
    const randomProduct = items.map((ele) => (
      <Product key={nanoId} product={ele} />
    ));
    setRandomProductElements(randomProduct);
  }, [products]);

  return (
    <section className="white-background all-products-section section-margin">
      {randomProductElements}
      <Link to={"/more-all-products"} className="all-items-click-more">
        click for more...
      </Link>
    </section>
  );
};

export default SectionAllProducts;
