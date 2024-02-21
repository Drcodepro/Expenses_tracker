import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UiRelatedComponent/Card';
import React,{useState} from "react";

export default function ExpenseItem(props){

       const [Delete,changeDelete]=useState(true)
    let handleDelete=()=>{
        let val =!Delete;
       changeDelete(val)
    }
        if(Delete){
        return( 
            
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>  
                <div className='expense-item__description'>
                    <h2>{props.location}</h2>
                    <h2>{props.tital}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                    <button onClick={handleDelete}>Dellete Expense</button>
                </div>
            </Card>
            );
        }
    else{
        return null;
    }
}
