// #container recovery
const container = document.getElementById("container")

// FOR STATEMENT
for (let i = 1; i <= 100; i++) {
    // Uninitialized variable
    let div;
    // CONDITIONAL STATEMENT
    // if i is divisible by both 3 and 5..., else if i is divisible by 5..., else if i is divisible by 3... ..., else...
    if (i % 3 === 0 && i % 5 === 0) {
        div = document.createElement("div")
        div.innerText = "FizzBuzz";
        container.append(div);
        // console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        div = document.createElement("div")
        div.innerText = "Buzz";
        container.append(div);
        // console.log("Buzz")
    } else if (i % 3 === 0) {
        div = document.createElement("div")
        div.innerText = "Fizz";
        container.append(div);
        // console.log("Fizz")
    } else {
        div = document.createElement("div")
        div.innerText = i;
        container.append(div);
        // console.log(i)
    }
}