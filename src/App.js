
import React,{useState} from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const Dummy_Exp = [
  {
    id:"e1",
    title:"Abcd",
    amount:100,
    date: new Date()
  },
  {
    id:"e2",
    title:"bcde",
    amount:100,
    date: new Date()
  },
  {
    id:"e3",
    title:"cdef",
    amount:100,
    date: new Date()
  }
];

function App() {

  

  const [expenses,setExpenses] = useState(Dummy_Exp);

  const addExpenseHandler =(expense)=>{
    console.log("In app.js");
    console.log(expense);

    setExpenses( prevExpenses =>{
      // const newExpenseList = [expense, ...prevExpenses];
      // console.log(newExpenseList);
      // return newExpenseList;

      return [expense,...prevExpenses];
    });

    console.log("expenses");
    console.log(expenses);
  };

  return (
    <div>
      <h1 style={{textAlign: "center", color:"white" }}>Expense Calculator</h1>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>

        
    </div>
  );
}

export default App;
