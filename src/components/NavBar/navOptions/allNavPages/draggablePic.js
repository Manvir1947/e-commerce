import React, { useEffect, useState } from "react";
import arrowSvg from "../arrowSvg";
import crossSvg from "./crossSvg";
import { useContext } from "react";
import { appContext } from "../../../../Context";
import { Link } from "react-router-dom";
import minusSign from "./minusSign";
import plusSign from "./plusSign";
const ZoomableDraggableImage = ({ setIsFlyerPage }) => {
  const { allProducts } = useContext(appContext);
  const [randomProduct, setRandomProduct] = useState([]);

  useEffect(() => {
    setRandomProduct(allProducts[6]);
  }, []);

  const [scale, setScale] = useState(1);
  const [transition, setTransition] = useState(0);
  const [isArrows, setIsArrows] = useState(false);

  useEffect(() => {
    if (scale > 1.2) {
      setIsArrows(true);
    } else setIsArrows(false);
  }, [scale]);

  const handleZoomIn = () => {
    setScale((prevScale) => (prevScale < 1.4 ? prevScale + 0.1 : prevScale));
  };

  const handleZoomOut = () => {
    setScale((prevScale) => (prevScale > 0.5 ? prevScale - 0.1 : prevScale));
  };
  const handleTansitionPlus = () => {
    setTransition((prevTransition) =>
      prevTransition < 80 ? prevTransition + 25 : prevTransition
    );
  };
  const handleTansitionMinus = () => {
    setTransition((prevTransition) =>
      prevTransition > -80 ? prevTransition - 25 : prevTransition
    );
  };

  return (
    <div className="arrow-svg-relative">
      <div className="zoomable-draggable-image-container">
        <div
          onClick={() => {
            setIsFlyerPage(false);
          }}
          className="flyer-cross-svg-div"
        >
          {crossSvg}
        </div>
        <div className="flyer-image-svgs-div">
          <div className="flyer-image-div">
            <div className="zoom-buttons">
              <button className="zoom-button" onClick={handleZoomIn}>
                {plusSign}
                <span className="zoom-txt">Zoom In</span>
              </button>
              <button className="zoom-button" onClick={handleZoomOut}>
                {minusSign}
                <span className="zoom-txt">Zoom Out</span>
              </button>
            </div>

            {isArrows && (
              <div
                onClick={handleTansitionPlus}
                className="flyer-arrow-svg-left flyer-arrow-svg-div"
              >
                {arrowSvg}
              </div>
            )}
            {isArrows && (
              <div
                onClick={handleTansitionMinus}
                className="flyer-arrow-svg-right flyer-arrow-svg-div"
              >
                {arrowSvg}
              </div>
            )}
            <div
              style={{
                transform: `scale(${scale}) translateX(${transition}px)`,
              }}
              className="flyer-all-photos-flex-div"
            >
              <img
                className="flyer-image"
                src={require("./flyerPhotos/image1.png")}
                alt="Image"
              />
              <img
                className="flyer-image"
                src={require("./flyerPhotos/image2.png")}
                alt="Image"
              />
              <img
                className="flyer-image"
                src={require("./flyerPhotos/image3.png")}
                alt="Image"
              />
              <img
                className="flyer-image"
                src={require("./flyerPhotos/image4.png")}
                alt="Image"
              />
            </div>
          </div>
        </div>
        <div className="second-column">
          <div className="flyer-dicounted-product-div ">
            <div className="flyer-dicounted-main-content">
              <p className="flyer-discounted-image-headings-h2 flyer-offer-ends-txt">
                Offer Ends on 02, 06 2023
              </p>
              <div className="flyer-dicounted-product-img-div">
                <img
                  className="flyer-dicounted-product-img"
                  src={
                    randomProduct.images
                      ? randomProduct.images[0]
                      : randomProduct.image
                  }
                  alt=""
                />
              </div>

              <h1 className="flyer-discounted-image-title">
                {randomProduct.title}
              </h1>
              <h1 className="flyer-discounted-image-title">
                {randomProduct.description}
              </h1>
              <div className="flyer-discounted-image-prices-section">
                <div className="flyer-discounted-image-headings-div">
                  <h2 className="flyer-discounted-image-headings-h2 ">
                    Regular Price:
                  </h2>
                  <p className="flyer-discounted-image-price-p regualar-price">
                    $
                    {Math.floor(
                      randomProduct.price + randomProduct.price * 0.15
                    )}
                  </p>
                </div>
                <div className="flyer-discounted-image-headings-div">
                  <h2 className="flyer-discounted-image-headings-h2 ">
                    Discounted Price:
                  </h2>
                  <p className="flyer-discounted-image-price-p">
                    ${randomProduct.price}
                  </p>
                </div>
              </div>
              <Link
                onClick={() => {
                  setIsFlyerPage(false);
                }}
                to={`/${randomProduct.id}`}
                className="flyer-discounted-image-details-button
            "
              >
                View details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomableDraggableImage;
