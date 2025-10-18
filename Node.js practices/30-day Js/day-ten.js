// 2666. Allow One Function Call

var once = function (fn) {
    let hasBeenCalled = false;
    let result = [];

    return function (...args) { // anonymous function call
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn(...args);
            return result;
        } else {
            return undefined;
        }
    }
}

/*const sum = (a, b, c) => a + b + c;

const sumOnce = once(sum);

const argsArray = [
    [1, 2, 3],
    [2, 3, 6]
];

argsArray.forEach(args => {
    console.log(sumOnce(...args));
});*/

const mupltiply = (a, b, c) => (a * b * c);
const mupltiplyOnce = once(mupltiply);
const argsArray = [[5, 7, 4], [2, 3, 6], [4, 6, 8]];
argsArray.forEach(args => console.log(mupltiplyOnce(...args)));