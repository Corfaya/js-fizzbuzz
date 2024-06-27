// FOR STATEMENT
for (let i = 1; i <= 100; i++) {
    // CONDITIONAL STATEMENT
    // if i is divisible by both 3 and 5..., else if i is divisible by 5..., else if i is divisible by 3... ..., else...
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(`${i}`)
    }
}