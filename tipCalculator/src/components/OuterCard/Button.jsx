import React, { useState } from "react";
import style from "./tipButton.module.css";
export default function Button(props) {
  const [tipPercent, setTipPercent] = useState(0);
  const onClickEventHandler = (e) => {
    setTipPercent(e.target.innerHTML);
   props.AddEventHandler(e.target.innerHTML)
  };
  return (
    <button
      type="submit"
      onClick={onClickEventHandler}
      className={style.buttonColor}
    >
      {props.price}
    </button>
  );
}
