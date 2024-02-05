import './ExpenseItem.css';

function ExpenseItem(props){
   // extracting the month day and year from the Date object
    const month = props.date.toLocaleString('en-us',{month:'long'})
    const day = props.date.toLocaleString('en-us',{day:'2-digit'})
    const year = props.date.getFullYear();

    return( 
    <div className="expense-item">
        <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
        <div className='expense-item__description'>
            <h2>{props.tital}</h2>
            <h2>{props.location}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;