import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2023, 10, 6);
  const expenseTitle = "Car Insurence";
  const expenseAmount = 567.56;
  const locationOfExpenditure = "New Yark";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h2>{locationOfExpenditure}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
