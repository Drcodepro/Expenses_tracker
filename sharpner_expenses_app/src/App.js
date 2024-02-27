
import Expenses from "./component/ExpensesRealetedComponents/Expenses";
import NewExpenses from "./component/newExpense/NewExpenses";
import React,{useState} from 'react'

let expenses = [
  { id:"e1",title: "Car insurance", date: new Date(2024, 1, 2), amount: 76382},
  { id:"e2",title: "bithday party", date: new Date(2024, 1, 7), amount: 376},
  { id:"e3",title: "Traveling", date: new Date(2024, 1, 15), amount: 10932},
  { id:"e4",title: "collage fee", date: new Date(2024, 1, 29), amount: 8761}
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

  return (<div>
   <NewExpenses showForm ={showForm} changeShow={handleChangeShow} addNewExpenseData={addNewExpense}/>
    <Expenses items={expense} />
  </div>)
}

export default App;
