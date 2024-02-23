import React from "react";
import ExpenseForm from "./ExpenseForm"
import './NewExpenses.css';

function NewExpenses(props){

    const addExpenseData=(newExpense)=>{
        props.addNewExpenseData(newExpense);
    }

    return (<div className="new-expense">
        <ExpenseForm onSaveExpanseData={addExpenseData}/>
    </div>)
}
export default NewExpenses;