export function isValidAmount(number = 0) {
    return number > 0 || isNaN(number);
}
