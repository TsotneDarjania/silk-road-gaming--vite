import React from "react";
import style from "./home.module.css";
import AuthenticationForm from "./components/authenticationForm/AuthenticationForm";
//test
const Home = () => {
  return (
    <div className={style.home}>
      <h1 className={style.title}>
        * Authentication is required before taking any action on this site{" "}
      </h1>
      <AuthenticationForm />
    </div>
  );
};

export default Home;
