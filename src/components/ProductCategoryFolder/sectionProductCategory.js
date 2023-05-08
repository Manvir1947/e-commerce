import React from "react";
import { Link, Routes } from "react-router-dom";
import categoryElementsData from "./categoryElementsData";
import appContext from "../../Context";

const SectionProductCategory = () => {
  const categoryElements = categoryElementsData.map((ele, index) => {
    return (
      <Link
        key={index}
        to={`/${ele.link}`}
        state={"kjabdja"}
        className="flex-column"
      >
        <img
          className="category-icons"
          alt={ele.title}
          src={require(`./categoryImages/${ele.ImgSrc}`)}
        />
        <h2 className="category-icons-title">{ele.title}</h2>
      </Link>
    );
  });

  return (
    <section>
      <div className="flex-row category-icons-section section-margin">
        {categoryElements}
      </div>
    </section>
  );
};

export default SectionProductCategory;
