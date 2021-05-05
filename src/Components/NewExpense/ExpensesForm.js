const ExpensesForm=()=>{
    return(
        <form>
                <div>
                    <label>Title : </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Number : </label>
                    <input type="text" min="0.01"/>
                </div>
                <div>
                    <label>Date : </label>
                    <input type="date"/>
                </div>
            </form>
    );
}

export default ExpensesForm;