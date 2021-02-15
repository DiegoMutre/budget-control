import PropTypes from "prop-types";

const Expense = ({ expense: { id, name, amount }, deleteExpense }) => {
    const handleDelete = () => {
        deleteExpense(id);
    };

    return (
        <li className="gastos">
            <p>
                {name} <span className="gasto">${amount}</span>
                <button className="alert-danger" onClick={handleDelete}>
                    Delete
                </button>
            </p>
        </li>
    );
};

Expense.propTypes = {
    expense: PropTypes.object.isRequired,
    deleteExpense: PropTypes.func.isRequired,
};

export default Expense;
