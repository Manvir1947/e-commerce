import React from "react";
import ZoomableDraggableImage from "./draggablePic";

const Flyers = ({ setIsFlyerPage }) => {
  return (
    <div className="flyer-section">
      <ZoomableDraggableImage setIsFlyerPage={setIsFlyerPage} />
    </div>
  );
};

export default Flyers;
