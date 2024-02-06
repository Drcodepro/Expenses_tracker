
import Expenses from "./component/ExpensesRealetedComponents/Expenses";


function App() {
  const expenses = [
    { tital: "Car insurance", date: new Date(2024, 1, 2), amount: 76382,location:"bhopal"},
    { tital: "bithday party", date: new Date(2024, 1, 7), amount: 376 ,location:"new delhi" },
    { tital: "Traveling", date: new Date(2024, 1, 15), amount: 10932,location:"goa" },
    { tital: "collage fee", date: new Date(2024, 1, 29), amount: 8761,location:"sagar" },
  ];
  return (<div>
    <h2>Let's get started!</h2>
    <Expenses items={expenses} />
  </div>)
}

export default App;
