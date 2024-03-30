import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import ExpenseForm from "./ExpenseForm";
import IncomeItem from "../IncomeItem/IncomeItem";



const Expenses = () => {
  const { addExpense, getExpenses, expenses, deleteExpense, totalExpense } = useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, [expenses]);

  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-Expense">Total Expense: <span>${totalExpense()}</span></h2>
        <div className="Expense-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="Expenses">
            {expenses.map((expense) => {
              const { _id, title, amount, category, description, date, type } = expense;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  category={category}
                  date={date}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                  type={type}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpensesStyled>
  );
};

const ExpensesStyled = styled.div`
  display: flex;
  overflow: auto;
  
  .total-Expense {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    gap: 0.5rem;
    span {
      font-size: 2rem;
      font-weight: 800;
      color: #fb6f92;
    }
  }
  .Expense-content {
    display: flex;
    gap: 2rem;
    .Expenses {
      flex: 1;
    }
  }
`;

export default Expenses;
