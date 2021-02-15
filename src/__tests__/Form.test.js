import { render, screen } from "@testing-library/react";
import userEvent, { specialChars } from "@testing-library/user-event";
import Form from "../components/Form";

const setAmounts = jest.fn();

describe("Test Form component", () => {
    test("<Form /> should be rendered", () => {
        render(<Form setAmounts={setAmounts} />);
    });

    test("<Form /> should write in the inputs", () => {
        render(<Form setAmounts={setAmounts} />);

        const budgetInput = screen.getByTestId("budget-input");
        userEvent.type(budgetInput, "100");

        expect(budgetInput.value).toBe("100");
        expect(budgetInput.value).not.toBe("");
    });

    test("<Form /> should show an alert with empty input", () => {
        render(<Form setAmounts={setAmounts} />);

        const submitBtn = screen.getByTestId("submit-btn");
        userEvent.click(submitBtn);
        expect(setAmounts).not.toHaveBeenCalled();

        const alert = screen.getByTestId("alert-message");
        expect(alert).toBeInTheDocument();
        expect(alert.textContent).toBe("The amount is not valid");
        expect(alert.textContent).not.toBe("");

        const budgetInput = screen.getByTestId("budget-input");
        userEvent.type(budgetInput, "-15");
        expect(budgetInput).toHaveValue(-15);
        expect(alert).toBeInTheDocument();

        userEvent.type(
            budgetInput,
            `${specialChars.backspace}${specialChars.backspace}${specialChars.backspace}10`
        );
        expect(budgetInput).toHaveValue(10);
        userEvent.click(submitBtn);
        expect(setAmounts).toHaveBeenCalled();
        expect(alert).not.toBeInTheDocument();
    });
});
