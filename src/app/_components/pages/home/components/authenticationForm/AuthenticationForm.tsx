"use client";

import React, { useState, useRef } from "react";
import style from "./authentication.module.css";
import isEmail from "validator/lib/isEmail";
import WarningText from "@/app/_components/utils/warningText/WarningText";

const AuthenticationForm = () => {
  const [showWarning, setShowWarning] = useState({
    showWarning: false,
    warningText: "",
  });

  const formData = useRef<{ [key: string]: string }>({
    username: "",
    password: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formData.current[name] = value;
  };

  const handleSubmit = () => {
    if (formData.current["username"].length < 8) {
      setShowWarning({
        showWarning: true,
        warningText: "Usernames must consist of a minimum of 8 characters.",
      });
      return;
    }

    if (formData.current["password"].length < 8) {
      setShowWarning({
        showWarning: true,
        warningText: "Password must consist of a minimum of 8 characters.",
      });
      return;
    }

    !isEmail(formData.current.email) &&
      setShowWarning({
        showWarning: true,
        warningText: "Please enter a valid email address.",
      });
  };

  return (
    <form className={style.form}>
      <div>
        <label htmlFor="username"> UserName : </label>
        <input
          type="text"
          maxLength={15}
          name="username"
          id="username"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password"> Password : </label>
        <input
          type="password"
          maxLength={15}
          name="password"
          id="password"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email"> Email : </label>
        <input
          type="email"
          maxLength={45}
          name="email"
          id="email"
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSubmit} type="button">
        Login
      </button>
      <button onClick={handleSubmit} type="button">
        Registration
      </button>
      {showWarning.showWarning && (
        <WarningText text={showWarning.warningText} />
      )}
    </form>
  );
};

export default AuthenticationForm;
