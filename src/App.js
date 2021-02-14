import { useState } from "react";
import ControlContainer from "./components/ControlContainer";
import Form from "./components/Form";

function App() {
    const [amounts, setAmounts] = useState({ budget: 0, remaining: 0 });

    return (
        <div className="container">
            <header>
                <h1>Weekly Expense</h1>
                <div className="contenido-principal contenido">
                    {amounts.budget <= 0 ? (
                        <Form setAmounts={setAmounts} />
                    ) : (
                        <ControlContainer
                            amounts={amounts}
                            setAmounts={setAmounts}
                        />
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
