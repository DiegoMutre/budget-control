import PropTypes from "prop-types";

const BudgetControl = ({ amounts: { budget, remaining } }) => {
    return (
        <>
            <div className="alert alert-primary">Budget: ${budget}</div>
            <div className="alert alert-success">Remaining: ${remaining}</div>
        </>
    );
};

BudgetControl.propTypes = {
    amounts: PropTypes.object.isRequired,
};

export default BudgetControl;
