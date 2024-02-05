import './ExpenseItem.css';

function ExpenseItem(){
    const ExpenseDate = new Date(2024,1,5);
    const ExpenseTitle = 'Car Insurance';
    const ExpensePrice = 254.3;
    return( 
    <div className="expense-item">
        <div>{ExpenseDate.toDateString()}</div>
        <div className='expense-item__description'>
            <h2>{ExpenseTitle}</h2>
            <div className='expense-item__price'>${ExpensePrice}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;