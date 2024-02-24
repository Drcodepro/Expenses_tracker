import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UiRelatedComponent/Card";
import React, { useState } from "react";

export default function ExpenseItem(props) {
  // useState()  hook
  const [Amount, changeExpense] = useState(props.amount);
  let handleExpense = () => {
    changeExpense(100);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.location}</h2>
        <h2>{props.title}</h2>
        <div className="expense-item__price">${Amount}</div>
        <button onClick={handleExpense}>Change Expense</button>
      </div>
    </Card>
  );
}
