import ExpenseForm from "./ExpenseForm";

const ControlContainer = () => {
    return (
        <div className="row">
            <div className="one-half column">
                <ExpenseForm />
            </div>
            <div className="one-half column">
                {/* ExpenseList here and BudgetControl here */}
            </div>
        </div>
    );
};

export default ControlContainer;
