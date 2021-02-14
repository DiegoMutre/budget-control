import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const ControlContainer = () => {
    const [expenses, setExpenses] = useState([]);

    return (
        <div className="row">
            <div className="one-half column">
                <ExpenseForm setExpenses={setExpenses} />
            </div>
            <div className="one-half column">
                {/* ExpenseList here and BudgetControl here */}
            </div>
        </div>
    );
};

export default ControlContainer;
