import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const deleteHandler = (id) => {
    props.delete(id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} amount={props.amount} />
        <button onClick={() => deleteHandler(props.id)}>Delete</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
