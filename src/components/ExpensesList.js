import PropTypes from "prop-types";
import Expense from "./Expense";

const ExpensesList = ({ expenses = [], setExpenses }) => {
    const deleteExpense = expenseId => {
        const expensesUpdated = expenses.filter(
            expense => expense.id !== expenseId
        );
        setExpenses(expensesUpdated);
    };

    return (
        <div className="gastos-realizados">
            <h2>Expense List</h2>
            {expenses.map(expense => (
                <Expense
                    key={expense.id}
                    expense={expense}
                    deleteExpense={deleteExpense}
                />
            ))}
        </div>
    );
};

ExpensesList.propTypes = {
    expenses: PropTypes.array.isRequired,
    setExpenses: PropTypes.func.isRequired,
};

export default ExpensesList;
