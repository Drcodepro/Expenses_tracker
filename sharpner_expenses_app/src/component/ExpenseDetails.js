import './ExpenseItem.css'

function ExpenseDetails(props){
    return(
    <div className='expense-item__description'>
        <div className='expense-item__price'>  <h2>{props.tital}</h2> ${props.amount}</div>
    </div>
    )
}

export default ExpenseDetails;