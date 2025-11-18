var longestCommonPrefix = function (strs) {
    strs.sort();
    s1 = strs[0];
    s2 = strs[strs.length - 1];
    idx = 0;

    while (idx < s1.length && idx < s2.length) {
        if (s1[idx] === s2[idx]) {
            idx++;
        } else {
            break;
        }
    }
    return s1.slice(0, idx);
}

strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); // output -> fl;
strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs)); // output -> "";

