
import './Card.css';


function ExpenseDate (props){ 
    const cardClass = "card " + props.className;
    return(
        
            <div className={cardClass}>
                {props.children}
            </div>
        
    )
}   
  

export default ExpenseDate;