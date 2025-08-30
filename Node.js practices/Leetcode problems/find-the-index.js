// 28. Find the Index of the First Occurrence in a String

var strStr = function (haystack, needle) {
    for (let i = 0, j = needle.length; j <= needle.length; i++, j++) {
        if (haystack.slice(i, j) === needle) {
            return i;
        }
    }
    return -1;
}

haystack = "sadbutsad";
needle = "sad";

console.log(strStr(haystack, needle));
