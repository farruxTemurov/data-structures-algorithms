// 2725. Interval Cancellation

const cancellable = function (fn, args, t) {
    fn(...args);

    const timer = setInterval(() => fn(...args), t);

    const cancelFn = () => clearInterval(timer);
    return cancelFn;
}

function sayHello(name) {
    console.log(`Hello ${name}`);
}

let cancel = cancellable(sayHello, ["Farrukh"], 1000);

setTimeout(() => {
    cancel();
    console.log("Stopped");
}, 5000);