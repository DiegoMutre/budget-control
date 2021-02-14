import PropTypes from "prop-types";
import { useState } from "react";
import BudgetControl from "./BudgetControl";
import ExpenseForm from "./ExpenseForm";
import ExpensesList from "./ExpensesList";

const ControlContainer = ({ amounts }) => {
    const [expenses, setExpenses] = useState([]);

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
