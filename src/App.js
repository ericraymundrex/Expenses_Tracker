import {useState} from 'react';
import './App.css';
import Card from './Components/UI/Card';
import ExpensesItem from './Components/Expenses/ExpensesItem';
import NewExpense from './Components/NewExpense/NewExpense' 
import Filter from './Components/Expenses/Filter';
function App() {
  const [yearSelected,setYear]=useState('');
  const Expense=[
    {name:"Car Insurance",amount:2000,date:new Date()},
    {name:"Movie",amount:800,date:new Date(1975,3,5)},
    {name:"Swiggy",amount:500,date:new Date()}
   ];

   const addExpenseHandler=(expense)=>{
    console.log(expense);
   }

   const FilterSearch=(year)=>{
    setYear(year);
  }

  return (
    <div>
      <NewExpense onSave={addExpenseHandler}/> 
      <Filter onFilterSearch={FilterSearch} selected={yearSelected}/>
      <Card className="App">
        <ExpensesItem title={Expense[0].name} amount={Expense[0].amount} date={Expense[0].date}></ExpensesItem>
        <ExpensesItem title={Expense[1].name} amount={Expense[1].amount} date={Expense[1].date} ></ExpensesItem>
        <ExpensesItem title={Expense[2].name} amount={Expense[2].amount} date={Expense[2].date} ></ExpensesItem>
      </Card>
    </div>
  );
}

export default App;
