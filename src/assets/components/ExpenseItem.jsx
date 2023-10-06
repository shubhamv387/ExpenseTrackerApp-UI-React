import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        locationOfExpenditure={props.locationOfExpenditure}
        amount={props.amount}
      />
    </div>
  );
};

export default ExpenseItem;
