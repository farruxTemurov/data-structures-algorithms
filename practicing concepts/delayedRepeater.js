const delayedRepeater = function (fn, args, delay, interval) {
    let timer;
    setTimeout(() => {
        timer = setInterval(() => fn(...args), interval);
    }, delay);

    const cancelFn = () => clearInterval(timer);
    return cancelFn;
}

function greet(name) {
    console.log(`Hello ${name}`);
}

let cancel = delayedRepeater(greet, ["Farrukh"], 1000, 2000);

setTimeout(() => {
    cancel();
    console.log("Stopped repeating!");
}, 5500);