// 2727. Is Object Empty

var isEmpty = function (obj) {
    if (Array.isArray(obj)) { // checks if the obj is specifically array
        return obj.length === 0;
    } else {
        Object.keys(obj).length === 0; // Object.keys gets the keys in the form of array.
        //  Then .lenth calculates the size.
    }
}