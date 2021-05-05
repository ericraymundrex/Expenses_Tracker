import {useState} from 'react';

import "./ExpensesItem.css";
import Date from './Date';
import Card from './Card';
function ExpensesItem(props){

    console.log(useState(props.title))
    const [title,setTitle]=useState(props.title);
    const clickHandle=()=>{
        setTitle("I shuck");
        console.log(title);
    }
  
    return (
    <Card className="expense-item">
        <div ><Date date={props.date}/> </div>
        &nbsp;&nbsp;&nbsp;
        <div className="expense-item__description">{title}</div>
        
        <div className="expense-item__price">$ {props.amount}</div>
        <button onClick={clickHandle}>Change state</button>
    </Card>
    
    );
}

export default ExpensesItem;