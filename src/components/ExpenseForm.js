import PropTypes from "prop-types";
import { useState } from "react";
import shortid from "shortid";
import { isValidAmount } from "../helpers/helpers";
import Alert from "./Alert";

const initialExpenseState = {
    id: "",
    name: "",
    amount: 0,
};

const ExpenseForm = ({ setExpenses }) => {
    const [expenseData, setExpenseData] = useState(initialExpenseState);
    const [hasError, setHasError] = useState(false);

    const handleChange = e => {
        setExpenseData({
            ...expenseData,
            [e.target.name]:
                e.target.name === "amount" ? +e.target.value : e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (
            !isValidAmount(expenseData.amount) ||
            expenseData.name.trim() === ""
        ) {
            setHasError(true);
            return;
        }

        setHasError(false);
        setExpenses(prevState => [
            { ...expenseData, id: shortid.generate() },
            ...prevState,
        ]);
        setExpenseData(initialExpenseState);
    };

    return (
        <form onSubmit={handleSubmit} data-testid="expense-form">
            <h2>Add your Expenses here</h2>
            {hasError && <Alert message="All fields are required" />}
            <div className="campo">
                <label>Expense Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    name="name"
                    placeholder="E.g. Transport"
                    onChange={handleChange}
                    value={expenseData.name}
                />
            </div>
            <div className="campo">
                <label>Expense Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    name="amount"
                    placeholder="E.g. 300"
                    onChange={handleChange}
                    value={expenseData.amount || ""}
                />
            </div>
            <input
                type="submit"
                className="u-full-width button-primary"
                value="Add Expense"
            />
        </form>
    );
};

ExpenseForm.propTypes = {
    setExpenses: PropTypes.func.isRequired,
};

export default ExpenseForm;
