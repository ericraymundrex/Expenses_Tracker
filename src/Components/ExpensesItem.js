import "./ExpensesItem.css";
import Date from './Date';
import Card from './Card';
function ExpensesItem(props){
    const clickHandle=()=>{
        console.log("Hello");
    }
  
    return (
    <Card className="expense-item">
        <div ><Date date={props.date}/> </div>
        &nbsp;&nbsp;&nbsp;
        <div className="expense-item__description">{props.title}</div>
        
        <div className="expense-item__price">$ {props.amount}</div>
        <button onClick={clickHandle}>Change state</button>
    </Card>
    
    );
}

export default ExpensesItem;