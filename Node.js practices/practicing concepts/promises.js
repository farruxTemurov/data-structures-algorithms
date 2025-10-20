// A Promise in JavaScript is an object that 
// represents a value that might not be available yet, but will be at some point in the future — or it might fail.

function delayedAdd(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}

delayedAdd(5, 7)
    .then(result => {
        console.log("First result " + result);
        return result * 2;
    }).then(doubled => {
        console.log("Doubled " + doubled);
    });