// 2721. Execute Asynchronous Functions in Parallel

var promiseAll = function (functions) {
    return new Promise((resolveOuter, rejectOuter) => {
        let results = new Array(functions.length);
        let count = 0;

        functions.forEach((fn, i) => {
            fn()
                .then(val => {
                    results[i] = val;
                    count++;
                    if (count === functions.length) {
                        resolveOuter(results);
                    }
                })
                .catch(reason => rejectOuter(reason));
        });
    })
}

function wait(ms, value, shouldReject = false) {
    return () =>
        new Promise((res, rej) => {
            setTimeout(() => {
                if (shouldReject) rej(value);
                else res(value);
            }, ms)
        })
}

async function test() {
    const funcs1 = [
        wait(300, "A"),
        wait(100, "B"),
        wait(200, "C")
    ];

    console.log("Test 1 (should resolve['A','B','C']):");
    promiseAll(funcs1)
        .then(res => console.log("Resolved:", res))
        .catch(err => console.log("Rejected:", err));

    const funcs2 = [
        wait(100, "X"),
        wait(200, "Y", true),   // reject
        wait(50, "Z")
    ];

    console.log("\nTest 2 (should reject with 'Y'):");
    promiseAll(funcs2)
        .then(res => console.log("Resolved:", res))
        .catch(err => console.log("Rejected:", err));

    // --- Test 3: empty array ---
    console.log("\nTest 3 (should resolve []):");
    promiseAll([])
        .then(res => console.log("Resolved:", res))
        .catch(err => console.log("Rejected:", err));
}

test();