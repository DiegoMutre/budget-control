const Expense = ({ expense: { name, amount } }) => {
    return (
        <li className="gastos">
            <p>
                {name} <span className="gasto">${amount}</span>
            </p>
        </li>
    );
};

export default Expense;
