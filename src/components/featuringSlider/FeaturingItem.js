import React from "react";

const FeaturingItem = ({ img: obj }) => {
  const { img1, img2, title } = obj;

  const colorClass = () => {
    if (obj.id == 1) {
      return "feature-title-blue";
    } else if (obj.id == 2) {
      return "feature-title-green";
    } else if (obj.id == 3) {
      return "feature-title-brown";
    } else return "feature-title-white";
  };

  return (
    <div className="featuring-img-div">
      <img className="feturing-image" src={img1} alt="feturing-image" />
      <h1 className={`feature-title flex-row ${colorClass()}`}>{title}</h1>
      <img className="feturing-image" src={img2} alt="feturing-image" />
    </div>
  );
};

export default FeaturingItem;
