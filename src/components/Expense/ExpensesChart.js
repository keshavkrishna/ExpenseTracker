import Chart from "../Chart/Chart";

const ExpenseChart = props =>{
    let chartDataPoints = [
        {label:"Jan", value: 0},
        {label: "Feb", value: 0},
        {label:"Mar", value: 0},
        {label: "Apr", value: 0},
        {label:"May", value: 0},
        {label: "Jun", value: 0},
        {label:"July", value: 0},
        {label: "Aug", value: 0},
        {label:"Sept", value: 0},
        {label: "Oct", value: 0},
        {label:"Nov", value: 0},
        {label: "Dec", value: 0}
    ]

    for(const expense of props.expenses)
    {
        const expenseMonth = expense.date.getMonth() // return 0 for january ,1 for february ...
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints = {chartDataPoints} />
}
export default ExpenseChart;