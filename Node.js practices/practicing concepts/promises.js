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

// greet function
async function meetAndGreet(name, millis) {
    await new Promise(resolve => setTimeout(resolve, millis))
        .then(() => {
            console.log(`Hello, ${name}`);
        });
    return `Waited for ${millis} milliseconds`;
}

meetAndGreet("Farrukh", 2000).then(console.log);
