// 2637. Promise Time Limit

/*const timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((res, rej) => {
            const timeoutId = setTimeout(() => {
                clearTimeout(timeoutId);
                rej("Time Limit Exceeded");
            }, t)

            fn(...args)
                .then((result) => {
                    clearTimeout(timeoutId);
                    res(result);
                })
                .catch((error) => {
                    clearTimeout(timeoutId);
                    rej(error);
                });
        });
    };
};*/

// cleaner version with Promise.race
const timeLimit = function (fn, t) {
    return async function (...args) {
        const timeoutPromise = new Promise((_, rej) =>
            setTimeout(() => rej("Time Limit Exceeded"), t)
        );

        return Promise.race([fn(...args), timeoutPromise]);
    }
}

const slowFunc = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Finished!");
        }, time);
    });
};

const limited = timeLimit(slowFunc, 1000);

limited(500)
    .then((data) => console.log("First:", data))
    .catch((err) => console.error("First:", err));

limited(2000)
    .then((data) => console.log("Second:", data))
    .catch((err) => console.error("Second:", err));
