import React from "react";
import { Link } from "react-router-dom";

const ProductLinks = () => {
 
  return (
    <nav className="nav-options-list flex-row">
      <li>
        <Link to={"/clothing"}>Clothing</Link>
      </li>

      <li>
        <Link to={"/storeFinder"}>
          <div className="flex-row">
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#2f7af4"
              stroke="#2f7af4"
              className="location-svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#2f7af4"
                  d="M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
                ></path>
              </g>
            </svg>
            <p>Store Finder</p>
          </div>
        </Link>
      </li>
    </nav>
  );
};

export default ProductLinks;
