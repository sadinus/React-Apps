export const calculate = (number1, number2, operator) => {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number2 !== 0 ? number1 / number2 : 0;
        default:
            return 0;
    }
};