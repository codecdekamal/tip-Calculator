import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import style from "../OuterCard/card.module.css";
export default function InnerCard({tipValue,tipPercentage,numberOfPeople}) {
 const [TotalAmount,setTotalAmount] = useState(4.23)
 const [total,setTotal] = useState(4.23)
 tipValue = parseInt(tipValue)
 tipPercentage = parseInt(tipPercentage)
 numberOfPeople = parseInt(numberOfPeople)
 console.log(tipValue,tipPercentage)
 const onSubmitEventHandler =(e)=>{
         e.preventDefault()
         setTotal(0)
         setTotalAmount(0)
         
 }
  const findingValue = useCallback(()=>{
    if(tipValue<0 || tipPercentage<0){
      return;
   }
   else{
     const value = (tipValue*tipPercentage)/100
      const totalPeople= TotalAmount*numberOfPeople
      setTotal(totalPeople)
      setTotalAmount(value)
   }
  },[tipValue,tipPercentage,numberOfPeople])
  useEffect(()=>{
    findingValue()
  },[findingValue])
   
 
  
  return (
    <form className={style.account} onSubmit={onSubmitEventHandler}>
      <div className={style.accountComponent}>
        <span>Tip Amount</span>
        <span className={style.price}>${TotalAmount}</span>
      </div>
      <div className={style.accountComponent}>
        <span>Total</span>
        <span className={style.price}>${total}</span>
      </div>
      <div className={style.reset}>
        <button type="submit">reset</button>
      </div>
    </form>
  );
}
