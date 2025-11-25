// 2727. Is Object Empty

var isEmpty = function (obj) {
    if (Array.isArray(obj)) { // checks if the obj is specifically array
        return obj.length === 0;
    } else {
        return Object.keys(obj).length === 0; // Object.keys gets the keys in the form of array.
        //  Then .lenth calculates the size.
    }
}

console.log(isEmpty([]));              // true (empty array)
console.log(isEmpty([1, 2]));          // false

console.log(isEmpty({}));              // true (empty object)
console.log(isEmpty({ a: 1 }));        // false

console.log(isEmpty(JSON.parse("{}")));     // true
console.log(isEmpty(JSON.parse("[]")));     // true
console.log(isEmpty(JSON.parse("[1]")));    // false
console.log(isEmpty(JSON.parse('{"x":4}')));// false

console.log(isEmpty(JSON.parse('"hello"')));// should NOT be empty
console.log(isEmpty(JSON.parse("123")));    // should NOT be empty
console.log(isEmpty(JSON.parse("true")));   // should NOT be empty
