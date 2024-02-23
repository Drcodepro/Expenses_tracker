import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm() {
  const [enteredTitle, changeTitle] = useState("");
  const [enteredAmount, changeAmount] = useState("");
  const [enteredDate, changeDate] = useState("");


  // ###### multiState in single state ######

//   const [userInput, changeState] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const TitleHandler = (event) => {
    changeTitle(event.target.value);

    // ###### changing the perticular key of our state
    
    //changeState({ ...userInput, enteredTitle: event.target.value });
    
    // above method of changing is often create a error because , react not update states instently enstead of this it scedules the states,,, so if we changed multiple states at a time so there might be condition when we get unexpected previous state and these will lead to errors soooo
    // instead of using above method we use thisss methodd  ------
    
    // changeState((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const DateHandler = (event) => {
    changeAmount(event.target.value);
  };

  const AmountHandler = (event) => {
    changeDate(event.target.value);
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    const expenses={
        title:enteredTitle,
        date:new Date(enteredDate),
        amount:enteredAmount
    }
    console.log(expenses);
    
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={TitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2024-01-01"
            max="2026-12-31"
            onChange={DateHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={handleSubmit}>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
