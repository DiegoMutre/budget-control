import PropTypes from "prop-types";
import Expense from "./Expense";

const ExpensesList = ({ expenses = [] }) => {
    return (
        <div className="gastos-realizados">
            <h2>Expense List</h2>
            {expenses.map(expense => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </div>
    );
};

ExpensesList.propTypes = {
    expenses: PropTypes.array.isRequired,
};

export default ExpensesList;
