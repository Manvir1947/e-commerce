import React, { useContext, useEffect } from "react";
import { appContext } from "../Context";

import NavBar from "./NavBar/NavBar";
import SectionFooter from "./footer/sectionFooter";
import { Outlet } from "react-router-dom";
import SignIn from "./signInPage/signIn";
import SignUpPage from "./signInPage/signUpPage";
import Spinner from "./spinner";
import SignUpSuccessMsg from "./signInPage/signUpSuccessMsg";
import Wrapper from "../wrapper";
import OverFlowBackgroundHidden from "./overFlowBackgroundHidden";

function Root() {
  const BackgroundOverFlow = OverFlowBackgroundHidden();
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

  useEffect(() => {
    console.log("active", isActiveSignIn);
    if (isActiveSignIn) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isActiveSignIn]);
  BackgroundOverFlow(isActiveSignIn);
  BackgroundOverFlow(isActiveSignUp);
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
      <Wrapper>
        <NavBar />
        {isActiveSignIn && <SignIn />}
        {isActiveSignUp && <SignUpPage />}
        {isActiveSpinner && <Spinner />}
        {isActiveSignUpSuccess && <SignUpSuccessMsg />}
        <Outlet />
        <SectionFooter />
      </Wrapper>
    </div>
  );
}

export default Root;
