// 2703. Return Length of Arguments Passed
/*
const argumentsLength = function (...args) {
    let passedArgs = [];

    for (n of args) {
        passedArgs.push(n);
    }

    return passedArgs.length;
}*/

// more simpler method then writing all those lines of code above
const argumentsLength = function (...args) {
    return args.length;
}
