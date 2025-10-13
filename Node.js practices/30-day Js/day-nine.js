// 2703. Return Length of Arguments Passed

const argumentsLength = function (...args) {
    let passedArgs = [];

    for (n of args) {
        passedArgs.push(n);
    }

    return passedArgs.length;
}