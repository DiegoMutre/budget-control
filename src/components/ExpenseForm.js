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
            <div className="campo">
                <label>Expense Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="E.g. 300"
                />
            </div>
            <input
                type="submit"
                className="u-full-width button-primary"
                value="Add Expense"
            />
        </form>
    );
};

export default ExpenseForm;
