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
        div.classList.add("square")
        div.classList.add("both-style")
        container.append(div);
    } else if (i % 5 === 0) {
        div = document.createElement("div")
        div.innerText = "Buzz";
        div.classList.add("square")
        div.classList.add("five-style")
        container.append(div);
    } else if (i % 3 === 0) {
        div = document.createElement("div")
        div.innerText = "Fizz";
        div.classList.add("square")
        div.classList.add("three-style")
        container.append(div);
    } else {
        div = document.createElement("div")
        div.innerText = i;
        div.classList.add("square")
        div.classList.add("num-style")
        container.append(div);
    }
}