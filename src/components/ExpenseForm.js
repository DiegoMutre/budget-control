import { useState } from "react";

const ExpenseForm = () => {
    const [expenseData, setExpenseData] = useState({
        name: "",
        amount: 0,
    });

    const handleChange = e => {
        setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
    };

    return (
        <form>
            <h2>Add your Expenses here</h2>
            <div className="campo">
                <label>Expense Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    name="name"
                    placeholder="E.g. Transport"
                    onChange={handleChange}
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

export default ExpenseForm;
