export function isValidAmount(number = 0) {
    return number > 0 || isNaN(number);
}

export function getAlertColor(budget, remaining) {
    let alertClassName = "alert-success";

    // Calculate 25%
    if (remaining <= budget / 4) {
        return (alertClassName = "alert-danger");
    }

    // Calculate 50%
    if (remaining <= budget / 2) {
        return (alertClassName = "alert-warning");
    }

    return alertClassName;
}
