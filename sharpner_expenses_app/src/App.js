import ExpenseItem from "./component/ExpenseItem";
function App() {
  const expenses = [
    { tital: "Car insurance", date: new Date(2024, 1, 2), amount: 76382,location:"bhopal"},
    { tital: "bithday party", date: new Date(2024, 1, 7), amount: 376 ,location:"new delhi" },
    { tital: "Traveling", date: new Date(2024, 1, 15), amount: 10932,location:"goa" },
    { tital: "collage fee", date: new Date(2024, 1, 29), amount: 8761,location:"sagar" },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {
       expenses.map((element,index) => { // Map() function for loop , we uses map() because jsx can accept the only valid expressions that returns any value

        return <ExpenseItem key={index}
        tital={element.tital}
        date={element.date}
        amount={element.amount}
        location ={element.location}
      ></ExpenseItem>
       })
      }
      
    </div>
  );
}

export default App;
