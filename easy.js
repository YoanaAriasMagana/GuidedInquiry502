//EASY: Write a function that would allow you to do this:
//var run = exercise('running');
//console.log(run()); // prints "Today's exercise: running" var swim = exercise('swimming');
//console.log(swim()); // prints "Today's exercise: swimming"

function excercise(x) {
    return `Today's excercise: ${x}`
}
console.log(excercise("Running"))

console.log(excercise("Swimming"))

