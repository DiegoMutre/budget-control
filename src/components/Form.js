import { useState } from "react";
import Alert from "./Alert";

const Form = ({ setAmounts }) => {
    const [budgetAmount, setBudgetAmount] = useState(0);
    const [hasError, setHasError] = useState(false);

    const handleChange = e => {
        setBudgetAmount(+e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Validate
        if (budgetAmount <= 0 || isNaN(budgetAmount)) {
            setHasError(true);
            return;
        }

        setHasError(false);
        setAmounts({ budget: budgetAmount, remaining: budgetAmount });
    };

    return (
        <form onSubmit={handleSubmit} data-testid="form">
            <h2>Put your Budget</h2>
            {hasError && <Alert message="The amount is not valid" />}
            <input
                type="number"
                className="u-full-width"
                placeholder="Put your Budget"
                onChange={handleChange}
                data-testid="budget-input"
            />
            <input
                type="submit"
                className="u-full-width button-primary"
                value="Define Budget"
                data-testid="submit-btn"
            />
        </form>
    );
};

export default Form;
