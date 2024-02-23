import React from "react";
import ExpenseForm from "./ExpenseForm"
import './NewExpenses.css';

function NewExpenses(props){

    return (<div className="new-expense">
        <ExpenseForm expenses ={props}/>
    </div>)
}
export default NewExpenses;