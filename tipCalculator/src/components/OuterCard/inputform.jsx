import React from "react";
import { useState } from "react";
export default function InputForm(props) {
  const [bill, setBill] = useState('');
  const OnChangeEventHandler = (e) => {
   let billValue = e.target.value;
     setBill(billValue)
    props.onGivingValue(billValue)
   // console.log(e.target.value)
  };
  return (
    <div>
      <label htmlFor="bill">{props.title}</label>
      <br />
      <input
        type="number"
        placeholder={props.sign}
        onChange={OnChangeEventHandler}
      />
    </div>
  );
}
