import { useState } from "react";
import "./App.css";
import ExpenseItem from "./assets/components/ExpenseItem";

function App() {
  return (
    <>
      <h1>Expense App</h1>
      <ExpenseItem />
    </>
  );
}

export default App;
