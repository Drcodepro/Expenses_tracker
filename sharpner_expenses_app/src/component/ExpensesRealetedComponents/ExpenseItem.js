import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UiRelatedComponent/Card';
import React from "react";

export default class ExpenseItem extends React.Component{
    
    constructor(){
        super();
        this.state={
            Delete:true
        }
    }
    handleDelete=()=>{
       let {Delete}=this.state;
     Delete=!Delete;
        this.setState({Delete})
    }

    render(){
        if(this.state.Delete){

        
        return( 
            
            <Card className="expense-item">
                <ExpenseDate date={this.props.date}/>  
                <div className='expense-item__description'>
                    <h2>{this.props.location}</h2>
                    <h2>{this.props.tital}</h2>
                    <div className='expense-item__price'>${this.props.amount}</div>
                    <button onClick={this.handleDelete}>Dellete Expense</button>
                </div>
            </Card>
            );
        }
    else{
        return null;
    }
}
}