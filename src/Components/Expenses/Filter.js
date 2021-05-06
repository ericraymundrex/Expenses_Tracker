const Filter=(props)=>{
    const Change=(event)=>{
        props.onFilterSearch(event.target.value);
        
    }
    return(
    <div>
        <select onChange={Change} value={props.selected}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
        </select>
    </div>
    );
}
export default Filter;