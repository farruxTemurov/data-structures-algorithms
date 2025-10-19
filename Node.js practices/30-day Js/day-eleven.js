// 2623. Memoize
// A memoized function is a function that will never
// be called twice with the same inputs. Instead it will return a cached value.

const memoize = function (fn) {
    const cache = {}; // it stores the result of expensive opereations

    return function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(2, 3)); // 5 --> computed the first time
memoizedFn(2, 3) // 5 --> it is returned from the cache
console.log(callCount) // 1 

// exercise that combines memoization and closure
const createMemoizedCounter = function() {
    let total = 0;
    const callCounts = {};

    return {
        increment(n) {
            total += n;
            if (callCounts[n] === undefined) {
                callCounts[n] = 1;
            } else {
                callCounts[n]++;
            }
            return total;
        },
        getCallCount(n) {
            return callCounts[n] || 0;
        }
    };
};


