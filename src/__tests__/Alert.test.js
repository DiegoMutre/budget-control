import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("<Alert /> Test to alert component", () => {
    test("<Alert /> should be rendered", () => {
        render(<Alert />);
    });

    test("<Alert /> should be rendered but with a message prop", () => {
        const message = "All fields are required";
        render(<Alert message={message} />);

        expect(screen.getByTestId("alert-message").textContent).toBe(message);
        expect(screen.getByTestId("alert-message").textContent).not.toBe("");
    });
});
