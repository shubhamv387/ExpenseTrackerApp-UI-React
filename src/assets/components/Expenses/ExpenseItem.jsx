import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const titleHandler = () => {
    setTitle("Hello");
  };

  const amountHandler = () => {
    setAmount(100);
  };

  const deleteHandler = (id) => {
    props.delete(id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        locationOfExpenditure={props.locationOfExpenditure}
        amount={amount}
      />
      <button onClick={titleHandler}>Change Title</button>
      <button onClick={amountHandler}>Change Amount</button>
      <button onClick={() => deleteHandler(props.id)}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
