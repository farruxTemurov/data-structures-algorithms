// 2622. Cache With Time Limit

class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        let found = this.cache.has(key);
        if (found) clearTimeout(this.cache.get(key).ref);

        this.cache.set(key, {
            value,
            ref: setTimeout(() => this.cache.delete(key), duration)
        });

        return found;
    }

    get(key) {
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }

    count() {
        return this.cache.size;
    }
}

const cache = new TimeLimitedCache();

console.log(cache.set("a", 123, 2000));   // Expected: false (new key)
console.log(cache.get("a"));             // Expected: 123
console.log(cache.count());             // Expected: 1

console.log(cache.set("a", 999, 2000));  // Expected: true (key already existed)
console.log(cache.get("a"));             // Expected: 999

setTimeout(() => {
    console.log("After 3 seconds:");
    console.log(cache.get("a"));           // Expected: -1 (expired)
    console.log(cache.count());            // Expected: 0
}, 3000);