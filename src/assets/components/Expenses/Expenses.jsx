import React, { useEffect, useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const Expenses = ({ items }) => {
  const [expenses, setExpenses] = useState(items);

  let deleteExpense = (id) => {
    setExpenses(expenses.filter((i) => i.id !== id));
  };

  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          delete={deleteExpense}
          locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
      <ExpenseForm />
    </Card>
  );
};

export default Expenses;
