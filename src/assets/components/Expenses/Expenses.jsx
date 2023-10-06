import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
    </Card>
  );
};

export default Expenses;
