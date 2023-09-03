import React from "react";
import style from "./wanringText.module.css";

const WarningText = ({ text }: { text: string }) => {
  return <div className={style.warningText}> {text} </div>;
};

export default WarningText;
