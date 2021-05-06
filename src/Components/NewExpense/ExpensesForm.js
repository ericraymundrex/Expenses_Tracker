import {useState} from 'react';
import './ExpensesForm.css';
const ExpensesForm=()=>{
    const [enteredTitle,setTitle]=useState('');
    const [enteredDate,setDate]=useState('');
    const [enteredAmount,setAmount]=useState('');
    const titleHandle=(event)=>{
        setTitle(event.target.value);
    }
    const DateHandle=(event)=>{
        setDate(event.target.value);
    }
    const amountHandler=(event)=>{
        setAmount(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expensesData={
            title:enteredTitle,
            Amount:enteredAmount,
            Date:new Date(enteredDate)
        }
        console.log(expensesData);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return( 
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title : </label>
                    <input type="text" onChange={titleHandle} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Number : </label>
                    <input type="number" min="0.01" step="0.01" onChange={amountHandler} value={enteredAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date : </label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={DateHandle} value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    );
}

export default ExpensesForm;