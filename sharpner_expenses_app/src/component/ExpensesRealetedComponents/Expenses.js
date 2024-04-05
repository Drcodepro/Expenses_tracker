
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from '../UiRelatedComponent/Card';
import ExpensesFilter from "./ExpenseFilter.js";
import React, { useState } from 'react';
import ExpenseBar from "./ExpenseBar.js";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (

    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} expenseArray = {props.items}/>
      
      <ExpenseBar filteredExpenses={filteredExpenses} />
      
      {filteredExpenses.length === 0 ? <p>No expense found of year {filteredYear}</p> :
        filteredExpenses.map((element) => {
          return(<><ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
          {filteredExpenses.length===1?<p>Only single Expense here. Please add more...</p>:null}
          </> 
          )
      })}
    </Card>
  );
}

export default Expenses;