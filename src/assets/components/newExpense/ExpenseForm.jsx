import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const inputHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: formData.title,
      amount: formData.amount,
      date: new Date(formData.date),
    };
    console.log(expenseData);
    setFormData({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            value={formData.title}
            onChange={inputHandler}
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            value={formData.amount}
            onChange={inputHandler}
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            id="amount"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            value={formData.date}
            onChange={inputHandler}
            type="date"
            min="2021-01-01"
            max="2030-12-31"
            name="date"
            id="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
