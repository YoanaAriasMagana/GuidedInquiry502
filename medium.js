//MEDIUM: Write a function that would allow you to do this:
//var sharePizza = cutPizzaSlices(8); console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza" console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"

var sharePizza = pizzaSlices(8);
function pizzaSlices(x) {
    return function sharePizza(y) {
        return `Each person gets ${x / y}.00 slices of pizza`;
    }
}
console.log(sharePizza(2));
console.log(sharePizza(3))
