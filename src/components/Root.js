import React, { useContext } from "react";
import { appContext } from "../Context";

import NavBar from "./NavBar/NavBar";
import SectionFooter from "./footer/sectionFooter";
import { Outlet } from "react-router-dom";
import SignIn from "./signInPage/signIn";
import SignUpPage from "./signInPage/signUpPage";
import Spinner from "./spinner";
import SignUpSuccessMsg from "./signInPage/signUpSuccessMsg";

function Root() {
  const {
    setIsActiveSearch,
    isActiveSearchAndSignIn,
    downArrowBool,
    setDownArrowBool,
  } = useContext(appContext);
  const {
    isActiveSignIn,
    isActiveSignUpSuccess,
    isActiveSignUp,
    isActiveSpinner,
  } = isActiveSearchAndSignIn;

  return (
    <div
      className="app"
      onClick={() => {
        console.log(downArrowBool);
        if (isActiveSearchAndSignIn.isActiveSearch || downArrowBool) {
          setIsActiveSearch(false);
          setDownArrowBool(false);
        }
      }}
    >
      <NavBar />
      {isActiveSignIn && <SignIn />}
      {isActiveSignUp && <SignUpPage />}
      {isActiveSpinner && <Spinner />}
      {isActiveSignUpSuccess && <SignUpSuccessMsg />}
      <Outlet />
      <SectionFooter />
    </div>
  );
}

export default Root;
