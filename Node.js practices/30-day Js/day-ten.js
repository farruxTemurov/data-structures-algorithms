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