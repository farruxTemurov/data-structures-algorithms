// 2725. Interval Cancellation

const cancellable = function (fn, args, t) {
    fn(...args);

    const timer = setInterval(() => fn(...args), t);

    const cancelFn = () => clearInterval(timer);
    return cancelFn;
}