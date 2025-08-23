var romanToInt = function (s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        if (romanMap[s[i]] < romanMap[s[i + 1]]) {
            sum -= romanMap[s[i]];
        } else {
            sum += romanMap[s[i]];
        }
    }
    return sum;
};

console.log(romanToInt("III")); // output: 3;  
console.log(romanToInt("LVIII")); // output: 58;
console.log(romanToInt("MCMXCIV")); // output: 1994;
