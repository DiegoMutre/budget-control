const ExpenseForm = () => {
    return (
        <form>
            <h2>Add your Expenses here</h2>
            <div className="campo">
                <label>Expense Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="E.g. Transport"
                />
            </div>
        </form>
    );
};

export default ExpenseForm;
