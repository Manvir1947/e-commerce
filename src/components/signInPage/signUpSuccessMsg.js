import React, { useContext } from "react";
import { appContext } from "../../Context";
import TickSvgPage from "../tickSvgPage";
import PlacedOrder from "../cartFolder/placedOrderAndSignUp";

const SignUpSuccessMsg = () => {
  const { setIsActiveSignUpSuccess, setIsActiveSignIn } =
    useContext(appContext);

  const tagLine = "Your Account has successfully been registered";
  const buttonText = "Continue Login";

  return (
    <PlacedOrder
      setFunction={setIsActiveSignUpSuccess}
      title={tagLine}
      buttonText={buttonText}
      setIsActiveSignIn={setIsActiveSignIn}
    />
  );
};

export default SignUpSuccessMsg;
