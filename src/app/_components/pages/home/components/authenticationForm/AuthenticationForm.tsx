"use client";

import React from "react";

const AuthenticationForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="username"> UserName : </label>
        <input type="text" maxLength={15} name="username" id="username" />
      </div>
      <div>
        <label htmlFor="password"> Password : </label>
        <input type="password" maxLength={15} name="password" id="password" />
      </div>
      <div>
        <label htmlFor="email"> Email : </label>
        <input type="email" maxLength={15} name="email" id="email" />
      </div>
      <button type="button"> Login </button>
      <button type="button"> Registration </button>
    </form>
  );
};

export default AuthenticationForm;
