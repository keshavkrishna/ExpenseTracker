import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {

    const [isEditing,setIsEditing]=useState(false);
    const startEditingHandler = () =>{
        console.log(isEditing);
        setIsEditing(!isEditing);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        
       props.onAddExpense(expenseData);
       startEditingHandler();
    };

    
    const cancelEditingHandler = () =>{
        startEditingHandler();
    }
    
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancelClick={cancelEditingHandler} onSaveExpenseData = {saveExpenseDataHandler} />}
        </div>

    );
};
export default NewExpense;





// import "./NewExpense.css";
// import ExpenseForm from "./ExpenseForm.js";

// const NewExpense = (props) => {
//     const saveExpenseDataHandler = (enteredExpenseData) => {
//         const expenseData = {
//             id: Math.random().toString(),
//             ...enteredExpenseData
//         };
//        props.onAddExpense(expenseData);
//     };
//     return (
//         <div className="new-expense">
//             <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
//         </div>

//     );
// };
// export default NewExpense;