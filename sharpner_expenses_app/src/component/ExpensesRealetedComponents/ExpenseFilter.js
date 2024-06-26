import React from 'react';
import '../ExpensesRealetedComponents/ExpenseFilter_.css';

const ExpensesFilter = (props) => {
  
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const uniqueYears = [...new Set(props.expenseArray.map(expense => new Date(expense.date).getFullYear()))];

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
        {uniqueYears.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;