
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Card from "./Card";

function Expenses(props){

    return (

        <Card className="expenses">

          {/* <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          />
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          />
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          /> */

          // using loop

          props.items.map((element,indx )=>{
            return <ExpenseItem 
            key={indx}
            title={element.title}
            amount={element.amount}
            date={element.date}
            location={element.location}
          />
          })
          }

        </Card>
      );
}

export default Expenses;