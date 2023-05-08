import React from "react";
import { useContext } from "react";
import { appContext } from "../../Context";
import DealsSlider from "./sliderTest";
import { nanoid } from "nanoid";
// =====================================

// =====================================

const BestDealsSection = () => {
  const { featureItems, currentScreenSize } = useContext(appContext);
  const dealsElements = [];
  const categoryTitle = [
    { caption: "Featuring Men clothing", class: "best-deals-title-blue-men" },
    { caption: "New in Stock", class: "best-deals-title-women" },
    { caption: "Ready for best deals", class: "best-deals-title-brown" },
  ];
  let counter = 0;
  for (let obj in featureItems) {
    const nanoId = nanoid();
    dealsElements.push(
      <DealsSlider
        key={nanoId}
        featureItemsArray={featureItems[obj]}
        categoryTitle={categoryTitle[counter]}
        currentScreenSize={currentScreenSize}
      />
    );
    counter++;
  }
  return <section className="section-margin">{dealsElements}</section>;
};

export default BestDealsSection;
