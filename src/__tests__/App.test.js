import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("<App /> component tests", () => {
    test("<App /> should be rendered", () => {
        render(<App />);
    });

    test("<App /> should show <Form /> and not <ExpenseForm />", () => {
        render(<App />);

        const form = screen.getByTestId("form");
        expect(form).toBeInTheDocument();

        const expenseForm = screen.queryByTestId("expense-form");
        expect(expenseForm).not.toBeInTheDocument();
    });

    test("<App /> should show <ExpenseForm /> and not <Form />", () => {
        render(<App />);

        const form = screen.getByTestId("form");
        expect(form).toBeInTheDocument();
        expect(screen.queryByTestId("expense-form")).not.toBeInTheDocument();
        expect(screen.queryByTestId("expense-list")).not.toBeInTheDocument();

        const budgetInput = screen.getByTestId("budget-input");
        userEvent.type(budgetInput, "100");
        expect(budgetInput).not.toHaveValue("100");
        expect(budgetInput).toHaveValue(100);

        const submitBtn = screen.getByTestId("submit-btn");
        userEvent.click(submitBtn);

        const expenseForm = screen.getByTestId("expense-form");
        const expenseList = screen.getByTestId("expense-list");
        expect(expenseForm).toBeInTheDocument();
        expect(expenseList).toBeInTheDocument();
        expect(form).not.toBeInTheDocument();

        const budget = screen.getByTestId("budget");
        const remaining = screen.getByTestId("remaining");
        expect(budget).toBeInTheDocument();
        expect(remaining).toBeInTheDocument();

        expect(budget.textContent).toBe("Budget: $100");
        expect(remaining.textContent).toBe("Remaining: $100");
        expect(budget.textContent).not.toBe("Budget: ");
        expect(remaining.textContent).not.toBe("Remaining: ");
    });
});
