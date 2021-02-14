import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import BudgetControl from "./BudgetControl";
import ExpenseForm from "./ExpenseForm";
import ExpensesList from "./ExpensesList";

const ControlContainer = ({ amounts, setAmounts }) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const totalAmount = expenses.reduce((acc, curr) => {
            return curr.amount + acc;
        }, 0);
        setAmounts(prevState => ({
            ...prevState,
            remaining: prevState.budget - totalAmount,
        }));
    }, [expenses, setAmounts]);

    return (
        <div className="row">
            <div className="one-half column">
                <ExpenseForm setExpenses={setExpenses} />
            </div>
            <div className="one-half column">
                <ExpensesList expenses={expenses} />
                <BudgetControl amounts={amounts} />
            </div>
        </div>
    );
};

ControlContainer.propTypes = {
    amounts: PropTypes.object.isRequired,
};

export default ControlContainer;
