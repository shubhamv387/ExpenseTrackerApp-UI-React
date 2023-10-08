import { useState } from "react";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("form Submitted!");
    setFormData({ title: "", amount: "", date: "" });
  };
  console.log(formData);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={formData.title}
          onChange={inputHandler}
          type="text"
          placeholder="title"
          name="title"
        />
        <input
          value={formData.amount}
          onChange={inputHandler}
          type="number"
          placeholder="amount"
          name="amount"
        />
        <input
          value={formData.date}
          onChange={inputHandler}
          type="datetime-local"
          placeholder="data"
          name="date"
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
