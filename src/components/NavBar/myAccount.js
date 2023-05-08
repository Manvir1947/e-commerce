import React, { useContext, useState } from "react";
import { appContext } from "../../Context";
import { Navigate } from "react-router";

const MyAccount = () => {
  const { setActiveAccount, activeAccount, userAccounts, setUserAccounts } =
    useContext(appContext);
  const [isChangePasswordActive, setIsChangePasswordActive] = useState(false);
  const [isChangeAddressActive, setIsChangeAddressActive] = useState(false);
  const [temporaryOldPassword, setTemporaryOldPassword] = useState("");
  const [temporaryNewPassword, setTemporaryNewPassword] = useState("");
  const [temporaryNewAddress, setTemporaryNewAddress] = useState("");

  const {
    userId,
    firstName,
    lastName,
    phoneOrEmail,
    newPassword,
    address,
    genderOption,
    birthdayMonth,
    birthdayDate,
    birthdayYear,
  } = activeAccount;

  if (!activeAccount) {
    return <Navigate to="/" />;
  }

  function newPasswordHidder(str) {
    let result = "";
    for (let letter of str) {
      result = result + "*";
    }
    return result;
  }
  function userAccountChanger(prev, valueToBeChanged, inputValue) {
    return prev.map((user) => {
      if (user.phoneOrEmail == activeAccount.phoneOrEmail) {
        return {
          ...user,
          [valueToBeChanged]: inputValue,
        };
      } else return user;
    });
  }
  function activeAccountChanger(prev, valueToBeChanged, inputValue) {
    return {
      ...prev,
      [valueToBeChanged]: inputValue,
    };
  }

  function handlePasswordChanger() {
    if (temporaryOldPassword != newPassword) {
      alert("Your Entered password doen't match the old one!");
    } else {
      setTemporaryNewPassword("");
      setIsChangePasswordActive(false);
      setTemporaryOldPassword("");
      setActiveAccount((prev) =>
        activeAccountChanger(prev, "newPassword", temporaryNewPassword)
      );
      setUserAccounts((prev) =>
        userAccountChanger(prev, "newPassword", temporaryNewPassword)
      );
    }
  }
  function handleAdressChanger() {
    setTemporaryNewAddress("");
    setIsChangeAddressActive(false);
    setUserAccounts((prev) =>
      userAccountChanger(prev, "address", temporaryNewAddress)
    );
    setActiveAccount((prev) =>
      activeAccountChanger(prev, "address", temporaryNewAddress)
    );
  }

  return (
    <section className="my-account--section">
      <h1 className="my-account--main-title">{firstName}, Account's Details</h1>
      <table className="my-account--table">
        <tr className="my-account--table-row">
          <td className="my-account--titles">User Id</td>
          <td className="my-account--answers">{phoneOrEmail}</td>
        </tr>
        <tr className="my-account--table-row">
          <td className="my-account--titles">First name</td>
          <td className="my-account--answers">{firstName}</td>
        </tr>
        <tr className="my-account--table-row">
          <td className="my-account--titles">Last Name</td>
          <td className="my-account--answers">{lastName}</td>
        </tr>
        <tr className="my-account--table-row">
          <td className="my-account--titles">Password</td>
          <td className="my-account--change-password-row my-account--answers">
            {newPasswordHidder(newPassword)}
            <div className="change-password-div ">
              <button
                onClick={() => {
                  setIsChangePasswordActive((prev) => !prev);
                }}
                className="my-account--change-password-button my-account--buttons my-account--change-button"
              >
                Change password
              </button>
              {isChangePasswordActive && (
                <div className="submit-new-password-div my-account--submit-div flex-column">
                  <div className="flex-row my-account--label-input-div">
                    <label className="my-account--labels" htmlFor="oldPassword">
                      Enter old password
                    </label>
                    <input
                      onChange={(event) => {
                        setTemporaryOldPassword(event.target.value);
                      }}
                      value={temporaryOldPassword}
                      className="my-account--input"
                      type="password"
                      id={"oldPassword"}
                      name="oldPassword"
                    />
                  </div>
                  <div className="flex-row my-account--label-input-div">
                    <label className="my-account--labels" htmlFor="newPassword">
                      Enter new password
                    </label>
                    <input
                      onChange={(event) => {
                        setTemporaryNewPassword(event.target.value);
                      }}
                      value={temporaryNewPassword}
                      className="my-account--input"
                      type="password"
                      id={"newPassword"}
                      name="oldPassword"
                    />
                  </div>
                  <button
                    onClick={handlePasswordChanger}
                    className="my-account--change-password-button my-account--buttons my-account--submit-button"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </td>
        </tr>
        {/* ===========address=================== */}
        <tr className="my-account--table-row">
          <td className="my-account--titles">Address</td>
          <td className="my-account--answers  my-account--change-address-row">
            {address}
            <div className="change-address-div">
              <button
                onClick={() => {
                  setIsChangeAddressActive((prev) => !prev);
                }}
                className="my-account--change-password-button my-account--buttons my-account--change-button "
              >
                Change Address
              </button>
              {isChangeAddressActive && (
                <div className="submit-new-password-div my-account--submit-div flex-column">
                  <div className="flex-row my-account--label-input-div">
                    <label className="my-account--labels" htmlFor="newAddress">
                      Enter new address
                    </label>
                    <input
                      onChange={(event) => {
                        setTemporaryNewAddress(event.target.value);
                      }}
                      value={temporaryNewAddress}
                      className="my-account--input"
                      type="text"
                      id={"newAddress"}
                      name="newAddress"
                    />
                  </div>
                  <button
                    onClick={handleAdressChanger}
                    className="my-account--change-password-button my-account--buttons my-account--submit-button"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </td>
        </tr>
        {/* ================GENDER============== */}
        <tr>
          <td className="my-account--titles">Gender</td>
          <td className="my-account--answers">{genderOption}</td>
        </tr>
        <tr>
          <td className="my-account--titles">Birthday</td>
          <td className="my-account--answers">
            {" "}
            <span className="birthday-span">
              {birthdayMonth} / {birthdayDate} / {birthdayYear}
            </span>
          </td>
        </tr>
      </table>
    </section>
  );
};

export default MyAccount;
