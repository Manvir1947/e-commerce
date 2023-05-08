import React, { useContext, useState } from "react";
import { appContext } from "../../Context";
import ButtonSpinner from "../buttonSpinner";
import CrossButton from "./crossButton";
const SignIn = () => {
  const [isButtonSpinner, setButtonSpinner] = useState(false);
  const {
    setIsActiveSignIn,
    setIsActiveSignUp,
    userAccounts,
    setActiveAccount,
  } = useContext(appContext);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  function handleLoginData(event) {
    const value = event.target.value;
    const name = event.target.name;
    setLoginData((preData) => ({
      ...preData,
      [name]: value,
    }));
  }

  function handleLoginSubmit(event) {
    event.preventDefault();

    //  newPassword
    const userFoundResult = userAccounts.filter(
      (userAccount) => userAccount.phoneOrEmail == loginData.userName
    );
    if (userFoundResult[0]) {
      setActiveAccount(userFoundResult[0]);
      setButtonSpinner(true);
      setTimeout(() => {
        setIsActiveSignIn(false);
        setButtonSpinner(false);
      }, 2000);
    } else {
      alert("No Account registered on this email or phone number!");
    }
  }
  const activeSpiner = isButtonSpinner ? <ButtonSpinner /> : "SignIn";
  return (
    <section className="sign-in-hero ">
      <div className="sign-in-div sign--in-box-shadow flex-column">
        <div
          onClick={() => {
            {
              setIsActiveSignIn(false);
            }
          }}
          className="sign-in--cross-button-div cross-button-sign-in-sign-up"
        >
          <CrossButton />
        </div>
        <img
          className="sign-in--company-logo"
          src={require("../NavBar/my-company-logo.png")}
          alt="Company Logo"
        />
        <form
          action="$"
          className="sign-in--form--div"
          onSubmit={(event) => {
            handleLoginSubmit(event);
          }}
        >
          <input
            className="sign--in-box-shadow"
            id="email"
            type="text"
            placeholder="Enter Your Email or Phone Number"
            name="userName"
            onChange={(event) => {
              handleLoginData(event);
            }}
            value={loginData.userName}
          />
          <input
            className="sign--in-box-shadow"
            id="password"
            type="text"
            placeholder="Enter Password"
            name="password"
            onChange={(event) => {
              handleLoginData(event);
            }}
            value={loginData.password}
          />
          <button className="login-button sign-in-buttons sign--in-box-shadow">
            {activeSpiner}
          </button>
          <div className="sign-up--divider sign--in-box-shadow"></div>

          <button
            onClick={() => {
              setIsActiveSignIn(false);
              setIsActiveSignUp(true);
            }}
            className="sign-up-button sign-in-buttons "
          >
            New to Product Villa?
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
