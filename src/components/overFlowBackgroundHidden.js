import React, { useEffect } from "react";

const OverFlowBackgroundHidden = () => {
  const BackgroundOverFlow = (condition) => {
    useEffect(() => {
      if (condition) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    }, [condition]);
  };

  return BackgroundOverFlow;
};

export default OverFlowBackgroundHidden;
