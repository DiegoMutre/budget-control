import { useState } from "react";
import Alert from "./Alert";

const Form = () => {
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Put your Budget</h2>
            {hasError && <Alert message="The amount is not valid" />}
            <input
                type="number"
                className="u-full-width"
                placeholder="Put your Budget"
                onChange={handleChange}
            />
            <input
                type="submit"
                className="u-full-width button-primary"
                value="Define Budget"
            />
        </form>
    );
};

export default Form;
