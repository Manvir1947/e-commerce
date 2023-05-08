import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { appContext } from "../../Context";
const DownArrowSvg = () => {
  const { setActiveAccount } = useContext(appContext);

  return (
    <div className="down-arrow-svg--div">
      <svg
        fill="#2f7af4"
        height="200px"
        width="200px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        className="down-arrow-svg--account-options account-options-svg navbar--svg-icons"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
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
              <path d="M475.582,70.27L256,289.852L36.418,70.27C22.979,56.831,0,66.349,0,85.355v106.667c0,5.658,2.248,11.084,6.248,15.085 l234.667,234.667c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667c4.001-4.001,6.248-9.427,6.248-15.085V85.355 C512,66.349,489.021,56.831,475.582,70.27z M469.333,183.185L256,396.518L42.667,183.185v-46.327l198.248,198.248 c8.331,8.331,21.839,8.331,30.17,0l198.248-198.248V183.185z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>

      <div className="nav--bar-account-options-box">
        <Link
          className="account-options-box-option my-account-link-option"
          to={"/favorite-products"}
        >
          Wish List
        </Link>
        <div className="account-options-box-option-divider"></div>
        <Link
          className="account-options-box-option my-account-link-option"
          to={"/my-account"}
        >
          My Account
        </Link>

        <div className="account-options-box-option-divider"></div>
        <p
          onClick={() => {
            setActiveAccount("");
          }}
          className="account-options-box-option"
        >
          Log out
        </p>
      </div>
    </div>
  );
};

export default DownArrowSvg;
