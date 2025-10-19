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

