
import Expenses from "./component/ExpensesRealetedComponents/Expenses";
import NewExpenses from "./component/newExpense/NewExpenses";
import React,{useState} from 'react'
import './App.css';

let expenses = [
  { id:"e1",title: "Car insurance", date: new Date(2024, 1, 2), amount:82},
  { id:"e2",title: "bithday party", date: new Date(2024, 2, 7), amount:36},
  { id:"e3",title: "Traveling", date: new Date(2024, 5, 15), amount:32},
  { id:"e4",title: "collage fee", date: new Date(2024, 8, 29), amount:61}
];

function App() {
   const [expense,setExpenses] = useState(expenses);
   const [showForm,setShowForm] = useState(false);

   const addNewExpense=(newExpanse)=>{
   setExpenses((prevState)=>{
    return [...prevState,newExpanse];
   });

   // changes the state for showing and despearing the add expense form.....
   setShowForm((prevstate)=>{
    return !prevstate;
  });
  };


// changes the state for showing and despearing the add expense form.....
const handleChangeShow=()=>{
  setShowForm((prevstate)=>{
    return !prevstate;
  });
}

  return (<>
  <div className="NavBar">Expense Tracker</div>
  <div>
   <NewExpenses showForm ={showForm} changeShow={handleChangeShow} addNewExpenseData={addNewExpense}/>
    <Expenses items={expense} />
  </div>
  </>)
}

export default App;
