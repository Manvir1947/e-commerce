import React, { useState, useContext, useEffect } from "react";
import { appContext } from "../../Context";
import CrossButton from "./crossButton";
import PasswordChecklist from "react-password-checklist";

export default function SignUpPage() {
  const {
    userAccounts,
    setUserAccounts,
    setIsActiveSpinner,
    setIsActiveSignUp,
    setIsActiveSignUpSuccess,
  } = useContext(appContext);
  const initialFormValues = {
    userId: "",
    firstName: "",
    lastName: "",
    phoneOrEmail: "",
    newPassword: "",
    matchPassword: "",
    address: "",
    genderOption: "Male",
    birthdayMonth: "January",
    birthdayDate: 1,
    birthdayYear: new Date().getFullYear(),
  };

  const [formData, setFormData] = useState(initialFormValues);
  const [focused, setFocused] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);

  useEffect(() => {
    if (formData.newPassword) {
      setFocused(true);
    } else setFocused(false);
  }, [formData.newPassword]);

  function setFormDataFun(event) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
  }

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber); // starts with 0, so 0 is January
    return date.toLocaleString("en-EN", { month: "long" });
  }

  function optionsGenerator(numOfLoops, monthsFun = false, startOfLoop = 0) {
    const optionsArray = [];
    for (let i = startOfLoop; i < numOfLoops; i++) {
      const value = monthsFun ? getMonthName(i) : i;
      optionsArray.push(<option value={value}>{value}</option>);
    }
    return optionsArray;
  }

  const months = () => {
    return optionsGenerator(12, true);
  };

  const years = () => {
    const currentYear = new Date().getFullYear() + 1;
    return optionsGenerator(currentYear, false, 1905).reverse();
  };
  const dates = () => {
    return optionsGenerator(32, false, 1);
  };

  function isValidEmail(email) {
    return email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
  }

  function isValidPhone(phone) {
    return phone.match(
      /^(\(\+[0-9]{2}\))?([0-9]{3}-?)?([0-9]{3})\-?([0-9]{4})(\/[0-9]{4})?$/
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const objFound = userAccounts.filter(
      (accountObj) => accountObj.phoneOrEmail == formData.phoneOrEmail
    );
    if (
      !(
        isValidEmail(formData.phoneOrEmail) ||
        !isValidPhone(formData.phoneOrEmail)
      )
    ) {
      alert("Email or phone number is invalid");
    } else if (!passwordValidate) {
      alert("You didn't follow all the requirements for password try again!");
    } else if (objFound.length > 0) {
      alert("This Email or Phone already registered");
    } else {
      setTimeout(() => {
        setIsActiveSpinner(false);
        setIsActiveSignUp(false);
        setIsActiveSignUpSuccess(true);
      }, 2000);
      setUserAccounts((prevAccountsArray) => [...prevAccountsArray, formData]);
      setFormData(initialFormValues);
      setIsActiveSpinner(true);
    }
  }
  return (
    <div className="sign-up-container">
      <div className="signup--form-container">
        <div
          onClick={() => {
            {
              setIsActiveSignUp(false);
            }
          }}
          className="sign-up--cross-button-div cross-button-sign-in-sign-up"
        >
          <CrossButton />
        </div>
        <div className="signup--title-logo-div flex-row">
          <h1 className="signup--form-title">Sign Up with</h1>
          <img
            className="signup--top-logo"
            src={require("../NavBar/my-company-logo.png")}
            alt="Company Logo"
          />
        </div>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="flex-column signup-form-div"
          action=""
        >
          <div className="signup-first-last-name-div flex-row">
            <input
              onChange={(event) => setFormDataFun(event)}
              type="text"
              name="firstName"
              placeholder="First name"
              required
              value={formData.firstName}
            />
            <input
              onChange={(event) => setFormDataFun(event)}
              name="lastName"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
            />
          </div>
          <input
            onChange={(event) => setFormDataFun(event)}
            className="phone"
            required
            type="tel"
            id="phone"
            name="phoneOrEmail"
            placeholder="Email or +1 123 456 7890"
            value={formData.phoneOrEmail}
          />
          <input
            onChange={(event) => setFormDataFun(event)}
            required
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="New password"
            value={formData.newPassword}
          />
          {focused && (
            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={5}
              value={formData.newPassword}
              valueAgain={formData.matchPassword}
              onChange={(isValid) => {
                setPasswordValidate(isValid);
              }}
            />
          )}
          <input
            onChange={(event) => setFormDataFun(event)}
            required
            type="password"
            id="matchPassword"
            name="matchPassword"
            placeholder="Enter your password again"
            value={formData.matchPassword}
          />
          <input
            required
            onChange={(event) => setFormDataFun(event)}
            type="text"
            id="address"
            name="address"
            placeholder="Enter your full address "
            value={formData.address}
          />
          {/* GENDER RADIO SECTION */}
          <div className="signup--all-radio-options-div">
            <h2 className="signup--gender-title">Gender</h2>
            <div className="signup-all-gender-options">
              <div className="signup--label-option">
                <label className="signup--gender-labels" for="male">
                  Male
                </label>
                <input
                  onChange={(event) => setFormDataFun(event)}
                  type="radio"
                  id="male"
                  name="genderOption"
                  value="Male"
                  checked
                />
              </div>

              <div className="signup--label-option">
                <label for="female">Female</label>
                <input
                  onChange={(event) => setFormDataFun(event)}
                  type="radio"
                  id="female"
                  name="genderOption"
                  value="Female"
                />
              </div>

              <div className="signup--label-option">
                <label for="genderOther">Other</label>
                <input
                  onChange={(event) => setFormDataFun(event)}
                  type="radio"
                  id="genderOther"
                  name="genderOption"
                  value="Other"
                />
              </div>
            </div>
          </div>
          {/* ==========BIRTHDAY DIV=================== */}
          <div className="signup--birthday-div">
            <h2 className="signup--birthday-title">Birthday</h2>
            <div className="sign-up--birthday-date-month-options">
              <div className="signup--birthday-option">
                <select
                  value={formData.birthdayMonth}
                  onChange={(event) => setFormDataFun(event)}
                  name="birthdayMonth"
                  id="birthdayMonth"
                >
                  {months()}
                </select>
              </div>

              <div className="signup--birthday-option">
                <select
                  value={formData.birthdayDate}
                  onChange={(event) => setFormDataFun(event)}
                  name="birthdayDate"
                  id="birthdayDate"
                >
                  {dates()}
                </select>
              </div>

              <div className="signup--birthday-option">
                <select
                  value={formData.birthdayYear}
                  onChange={(event) => setFormDataFun(event)}
                  name="birthdayYear"
                  id="birthdayYear"
                >
                  {years()}
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="signup--submit-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
