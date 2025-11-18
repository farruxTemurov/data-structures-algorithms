// clearTimeout is a built-in function that clears the timeout set by setTimeout and the 
// function will never run

function sayHi() {
    console.log("Hi broski");
}

const timerId = setTimeout(sayHi, 2000);

setTimeout(() => {
    clearTimeout(timerId);
    console.log("Cancelled!");
}, 1000);