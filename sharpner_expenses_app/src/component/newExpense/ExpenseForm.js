import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, changeTitle] = useState('');
  const [enteredAmount, changeAmount] = useState('');
  const [enteredDate, changeDate] = useState('');

  
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
    changeDate(event.target.value);
  };

  const AmountHandler = (event) => {
    changeAmount(Number(event.target.value));
  };

  let key =5;
  const handleSubmit=(event)=>{
    event.preventDefault();          
    const newExpense={
      id:`e${key}`,
      title:enteredTitle,
      date:new Date(enteredDate),
      amount:enteredAmount
    }
   key++;
    props.onSaveExpanseData(newExpense);

// to clear a form input fields after when user click on the submit button 
    changeTitle('');
    changeDate('');
    changeAmount('');
  }

  // Reset button work
  const handleReset=()=>{
    changeTitle('');
    changeDate('');
    changeAmount('');
    props.changeShow();
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={TitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            max="2024-12-31"
            onChange={DateHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountHandler}
            value={enteredAmount}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" onClick={handleReset}>cancel</button>
        <button type="submit" onClick={handleSubmit}>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
