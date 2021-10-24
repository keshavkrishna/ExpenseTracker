import React,{useState} from "react";

import "./ExpenseItem.css";
import "./ExpenseDate"
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  // let title = props.title;
 //   <button onClick={clickHandler}>Change title</button>
  // const [title,setTitle] = useState(props.title);
  // const clickHandler = ()=>{
  //   setTitle("updated");
  
  //   console.log("clicked");
  // }

  return (
      <div className="expense-item">
            <ExpenseDate date={props.date} />
            
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs {props.amount}</div>
            </div>
      </div>
  );
}

export default ExpenseItem;
