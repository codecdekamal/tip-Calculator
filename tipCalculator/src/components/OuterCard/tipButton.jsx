import React from "react";
import { useState } from "react";
import style from "./tipButton.module.css";
import Button from "./Button";
export default function TipButton(props) {
  const PercentageData = (tip) => {
    props.onAddingPercentageValue(tip)
  };
  const pricePercentage = ["5%", "10%", "15%", "25%", "30%", "custom"];
  const onSubmitEventHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <span>Select Tip %</span>
      <form className={style.outerBox} onSubmit={onSubmitEventHandler}>
        {pricePercentage.map((item) => {
          return (
            <Button key={item} price={item} AddEventHandler={PercentageData} />
          );
        })}
      </form>
    </div>
  );
}
