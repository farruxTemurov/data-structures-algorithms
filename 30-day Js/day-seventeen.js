// 2721. Execute Asynchronous Functions in Parallel

var promiseAll = function (functions) {
    return new Promise((resolveOuter, rejectOuter) => {
        let results = new Array(functions.length);
        let count = 0;

        functions.forEach(fn, i => {
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