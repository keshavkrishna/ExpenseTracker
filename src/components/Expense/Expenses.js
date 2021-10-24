import React,{useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";



function Expenses(props)
{
    const [filterYear, setFilterYear] = useState("2021");
    const selectHandler = (selectedYear) =>{
        console.log("Expenses.js");
        setFilterYear(selectedYear);
        console.log(filterYear,selectedYear);
    };


    const filteredExpenses = props.items.filter(expense => filterYear === expense.date.getFullYear().toString());
    


    

    return (
        <li>
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onSelect={selectHandler}/>
            { console.log("in expenses.js",props.items) }
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses}/>
            
        </Card>
        </li>
    );
}

export default Expenses;