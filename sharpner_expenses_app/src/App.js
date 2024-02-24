
import Expenses from "./component/ExpensesRealetedComponents/Expenses";
import NewExpenses from "./component/newExpense/NewExpenses";
import React,{useState} from 'react'

let expenses = [
  { title: "Car insurance", date: new Date(2024, 1, 2), amount: 76382},
  { title: "bithday party", date: new Date(2024, 1, 7), amount: 376},
  { title: "Traveling", date: new Date(2024, 1, 15), amount: 10932},
  { title: "collage fee", date: new Date(2024, 1, 29), amount: 8761}
];

function App() {
   const [expense,setExpenses] = useState(expenses);

   const addNewExpense=(newExpanse)=>{
   setExpenses((prevState)=>{
    return [newExpanse, ...prevState];
   });
  };

  return (<div>
    <NewExpenses addNewExpenseData={addNewExpense}/>
    <Expenses items={expense} />
  </div>)
}

export default App;
