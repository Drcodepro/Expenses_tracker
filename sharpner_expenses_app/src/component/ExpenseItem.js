import './ExpenseItem.css';

function ExpenseItem(props){
   
    return( 
    <div className="expense-item">
        <div>{props.date.toDateString()}</div>
        <div className='expense-item__description'>
            <h2>{props.tital}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <h2>{props.location}</h2>
        </div>
    </div>
    );
}

export default ExpenseItem;