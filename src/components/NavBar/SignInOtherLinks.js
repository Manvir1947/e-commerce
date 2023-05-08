import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AccountNameOptions from "./accountNameOptions";
import { appContext } from "../../Context";
const SignInOtherLinks = () => {
  const { cartItems, setIsActiveSignIn, activeAccount } =
    useContext(appContext);
  const cartFill = cartItems.length > 0 ? "#2f7af4" : "none";
  const activeUser = activeAccount ? (
    <AccountNameOptions activeAccount={activeAccount} />
  ) : (
    <>
      <div
        onClick={() => {
          setIsActiveSignIn(true);
        }}
        className="sign-in-option-text search-bar--navbar-links "
      >
        <span>SignIn</span>My Account
      </div>
    </>
  );
  return (
    <nav className="signin-flyer-cart-div nav-options-list flex-row">
      <li>
        <Link
          className="flex-row flyer-icon search-bar--navbar-links "
          to={"/flyers"}
        >
          <svg
            className="navbar--svg-icons"
            fill="#2f7af4"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M256,0L31.394,32.593V512L256,479.407L480.606,512V32.593L256,0z M240.806,450.907L61.781,476.884V58.889l179.025-25.977 V450.907z M450.219,476.884l-179.025-25.977V32.911l179.025,25.977V476.884z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M305.37,220.596v204.482l110.672,16.059V236.655L305.37,220.596z M385.654,406.021l-49.897-7.239v-143.07l49.897,7.239 V406.021z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M95.958,236.654v204.484l110.672-16.059V220.595L95.958,236.654z M176.243,398.783l-49.897,7.239c0,0,0-143.07,0-143.07 l49.897-7.239V398.783z"></path>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="345.497"
                    y="36.28"
                    transform="matrix(0.1436 -0.9896 0.9896 0.1436 217.2465 436.2592)"
                    width="30.387"
                    height="112.653"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="345.497"
                    y="86.347"
                    transform="matrix(0.1436 -0.9896 0.9896 0.1436 167.6995 479.1369)"
                    width="30.387"
                    height="112.653"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="345.529"
                    y="136.446"
                    transform="matrix(0.1436 -0.9896 0.9896 0.1436 118.1468 522.0733)"
                    width="30.387"
                    height="112.653"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="94.972"
                    y="77.414"
                    transform="matrix(0.9896 -0.1436 0.1436 0.9896 -11.7307 22.687)"
                    width="112.653"
                    height="30.387"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="94.969"
                    y="127.502"
                    transform="matrix(0.9896 -0.1436 0.1436 0.9896 -18.9235 23.2059)"
                    width="112.653"
                    height="30.387"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect
                    x="94.963"
                    y="177.582"
                    transform="matrix(0.9896 -0.1436 0.1436 0.9896 -26.1155 23.7242)"
                    width="112.653"
                    height="30.387"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <h3 className="search-bar--navbar-links">Flyers</h3>
        </Link>
      </li>
      <li>{activeUser}</li>
      <li className="cart-list-item">
        <Link to={"/cart"}>
          <div className="nav-bar--cart-svg-div flex-row navbar--links">
            <h2 className="proudct-count-cart-svg">
              {cartItems.length > 0 && cartItems.length}
            </h2>
            <svg
              className="nav-bar--cart-svg"
              viewBox="0 0 24 24"
              fill={cartFill}
              xmlns="http://www.w3.org/2000/svg"
              stroke="#a2005e"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle cx="10" cy="19" r="1.5" stroke="#a2005e"></circle>{" "}
                <circle cx="17" cy="19" r="1.5" stroke="#a2005e"></circle>{" "}
                <path
                  d="M3.5 4H5.5L9.00446 15H17"
                  stroke="#a2005e"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M8.22445 12.5L6.29862 6.5H18.8063C19.1476 6.5 19.3885 6.83435 19.2806 7.15811L17.614 12.1581C17.5459 12.3623 17.3548 12.5 17.1396 12.5H8.22445Z"
                  stroke="#a2005e"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </Link>
      </li>
    </nav>
  );
};

export default SignInOtherLinks;
