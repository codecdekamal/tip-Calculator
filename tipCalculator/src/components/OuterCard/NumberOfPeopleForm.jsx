import React, { useState } from 'react'

export default function NumberOfPeopleForm(props) {
    const [NumberOfPerson, setNumberOfPerson] = useState()
    const  OnChangeEventHandler = (e)=>{
    props.onGivingNumberOfPerson(e.target.value)
    setNumberOfPerson(e.target.value)
   }
   
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
  )
}
