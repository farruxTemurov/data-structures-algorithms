// 2627. Debounce
//Debouncing is preventing a function from unnecessary executions to save expensive calls
// e.g in keypress when searching or resizing the screen.

var debounce = function (fn, t) {

    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.call(this, ...args), t);
    }
}

function logMessage(msg) {
    console.log("Executed:", msg, "at", new Date().toLocaleString());
}

const debouncedLog = debounce(logMessage, 1000);

console.log("Start: ", new Date().toLocaleString());
debouncedLog("First call");

setTimeout(() => debouncedLog("Second call"), 200);
setTimeout(() => debouncedLog("Third call"), 400);
setTimeout(() => debouncedLog("Final call"), 1200);
