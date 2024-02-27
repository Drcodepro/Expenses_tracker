import React from "react";
import ExpenseForm from "./ExpenseForm"
import './NewExpenses.css';

function NewExpenses(props){

    const addExpenseData=(newExpense)=>{
        props.addNewExpenseData(newExpense);
    }

    // for showing and despearing the add expense form.....
    const handleShowform=()=>{
        props.changeShow();
    }


    return (<div className="new-expense">
        {props.showForm?<ExpenseForm onSaveExpanseData={addExpenseData} changeShow={props.changeShow}/> : <button onClick={handleShowform}>add new Expense</button>}
    </div>)
}
export default NewExpenses;