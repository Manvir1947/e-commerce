import React from "react";
import CategoryPagesCreator from "../../../ProductCategoryFolder/categoryPagesCreator";
import { useContext } from "react";
import { appContext } from "../../../../Context";
function Clothings() {
  const { categories } = useContext(appContext);
  const allClothing = [...categories.men, ...categories.women];
  return (
    <>
      <CategoryPagesCreator
        loader={{ categoryName: "Clothing", data: allClothing }}
      />
    </>
  );
}

export default Clothings;
