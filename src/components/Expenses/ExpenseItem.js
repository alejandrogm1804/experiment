import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';
import React , {useState} from 'react';

function ExpenseItem(props){    
    const [title, setTitle] =  useState(props.title);
    const changeTitle =  () => {
        setTitle("updated");
        console.log('testing');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
                <button onClick={changeTitle}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;