import PropTypes from "prop-types";
import { useRef } from "react";
import { getAlertColor } from "../helpers/helpers";

const BudgetControl = ({ amounts: { budget, remaining } }) => {
    const alertClassName = useRef("alert-success");
    alertClassName.current = getAlertColor(budget, remaining);

    return (
        <>
            <div className="alert alert-primary" data-testid="budget">
                Budget: ${budget}
            </div>
            <div
                className={`alert ${alertClassName.current}`}
                data-testid="remaining"
            >
                Remaining: ${remaining}
            </div>
        </>
    );
};

BudgetControl.propTypes = {
    amounts: PropTypes.object.isRequired,
};

export default BudgetControl;
