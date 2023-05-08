import React, { useContext } from "react";
import { appContext } from "../../Context";

const CartRemoveOpenbin = ({ handleMouseLeave, obj }) => {
  const { removeCartItems } = useContext(appContext);
  return (
    <div>
      <svg
        onMouseOut={handleMouseLeave}
        fill="#880808"
        onClick={() => removeCartItems(obj)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
        enableBackground="new 0 0 52 52"
        xmlSpace="preserve"
        className="cart-svg-bin"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M44.2,7.1l-12,1.9l-0.6-3.8c-0.3-2.1-2.3-3.5-4.4-3.2L21.4,3c-2.1,0.3-3.5,2.3-3.2,4.4l0.6,3.8L7,13.1 c-0.8,0.1-1.3,0.9-1.2,1.7l0.5,2.8c0.1,0.8,0.9,1.3,1.7,1.2l37.1-6c0.8-0.1,1.3-0.9,1.2-1.7l-0.5-2.8C45.7,7.6,44.9,7,44.2,7.1z M28.3,9.7l-5.6,0.9l-0.5-2.8c-0.1-0.5,0.2-1,0.8-1.1l3.8-0.6c0.5-0.1,1,0.2,1.1,0.8L28.3,9.7z"></path>{" "}
          <path d="M41.4,21h-30c-0.8,0-1.5,0.7-1.5,1.5v22.7c0,2.7,2.1,4.8,4.8,4.8h23.2c2.7,0,4.8-2.1,4.8-4.8V22.5 C42.8,21.7,42.2,21,41.4,21z M23.8,45.1l-4.9,0.1c-0.2,0-2,0-3.2-1.9c-1.3-2.1-0.3-3.9,1.2-6.4l-1.4-0.9c-0.2-0.1-0.2-0.2-0.2-0.4 c0-0.2,0.1-0.2,0.3-0.3l3.8-0.9l0.3-0.1c0.2,0,0.3,0,0.5,0.3l0.1,0.3l0.8,3.9c0,0.2,0,0.3-0.2,0.4c-0.2,0.1-0.3,0.1-0.5,0l-1.2-0.8 c-1.3,2.2-1.5,2.9-1.2,3.5c0.4,0.6,0.9,0.7,0.9,0.7l4.8-0.1c0.5,0,0.9,0.2,1.2,0.6c0.2,0.2,0.2,0.5,0.2,0.7 C25.2,44.4,24.6,45.1,23.8,45.1z M27.3,31c0-0.2,0.1-0.3,0.2-0.4l1.3-0.6c-1.2-2.3-1.6-2.9-2.3-2.9c-0.8,0-1,0.4-1.1,0.5l-2.5,4.1 c-0.2,0.4-0.7,0.6-1.2,0.6c-0.2,0-0.5-0.1-0.7-0.2c-0.6-0.4-0.8-1.2-0.4-1.9l2.5-4.1c0.1-0.2,1.1-1.7,3.3-1.7c2.5,0,3.4,1.9,4.8,4.5 l1.5-0.7c0.2-0.1,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.1,0.4L32,32.6c0,0.1-0.1,0.2-0.2,0.2s-0.3,0-0.3,0l-3.9-1.5 C27.3,31.3,27.3,31.2,27.3,31z M37.4,42.8c-1.2,2.2-3.2,2.2-6.2,2.1l-0.1,1.7c0,0.2-0.1,0.3-0.2,0.3c-0.1,0-0.2,0.1-0.4-0.1l-2.9-3 c-0.2-0.2,0-0.5,0-0.5l0.2-0.2l3.1-2.7c0.2-0.1,0.2-0.2,0.4-0.1c0.2,0.1,0.2,0.2,0.2,0.4l-0.1,1.5c2.5,0,3.3-0.1,3.6-0.7 s0.2-1.1,0.1-1.2l-2.4-4.2c-0.2-0.4-0.2-0.9,0-1.3c0.2-0.2,0.3-0.4,0.5-0.5c0.6-0.4,1.5-0.2,1.9,0.5l2.4,4.2 C37.6,39.3,38.5,40.8,37.4,42.8z"></path>{" "}
          <polygon points="21.4,18.9 38.9,16 39,18.9 "></polygon>{" "}
        </g>
      </svg>
    </div>
  );
};

export default CartRemoveOpenbin;