import React, { useState } from "react";
import style from "./card.module.css";
import InputForm from "./inputform";
import TipButton from "./tipButton";
import InnerCard from "../InnerCard/InnerCard";
import NumberOfPeopleForm from "./NumberOfPeopleForm";
export default function Card() {
  const [tipValue,setTipValue] = useState(0)
  const [tipPercentage,setTipPercentage]=useState(0)
  const [numberOfPeople , setNumberOfPeople] = useState(0);
  function onGettingNumberOfPerson(dataNumberOfPeople){
    setNumberOfPeople(dataNumberOfPeople)
  }
  function onClickEventHandler(e){
         console.log(e.target.value)
  }
 function  onGettingTargetValue(value){
  setTipValue(value)
 }
    function PercentageValue(tip){
      setTipPercentage(tip)
    }
  return (
    <div className={style.outerBox}>
      <div className={style.leftSide}>
        <InputForm title="Bill" sign="$" onGivingValue ={onGettingTargetValue}/>
        <TipButton onAddingPercentageValue = {PercentageValue}/>
        <NumberOfPeopleForm title="Number of People" onGivingNumberOfPerson={onGettingNumberOfPerson} onChange={onClickEventHandler}/>
      </div>
      <div className={style.rightSide}>
       <InnerCard tipValue={tipValue} tipPercentage={tipPercentage} numberOfPeople={numberOfPeople}></InnerCard>
      </div>
    </div>
  );
}
