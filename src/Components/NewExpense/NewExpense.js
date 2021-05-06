import ExpenseForm from './ExpensesForm';
import './NewExpense.css';

const NewExpenses=(props)=>{
    const saveExpenseDate=(expensesData)=>{
        const expenseDateentered={
            ...expensesData
        } 
        props.onSave(expenseDateentered);
    }
    
    return(
        <div>
            <div className="new-expense">
                <ExpenseForm onSaveExpenseDate={saveExpenseDate}/>
            </div>
        </div>
    );
}

export default NewExpenses;