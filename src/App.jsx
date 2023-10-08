import "./App.css";
import Expenses from "./assets/components/Expenses/Expenses";
import NewExpense from "./assets/components/newExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: "Delhi",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      locationOfExpenditure: "Mumbai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Chennai",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.65,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: "Prayag Raj",
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />;
    </div>
  );
}

export default App;
