var isPalindrome = function (num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    };

    return original === reversed;
};
num = 121; // An integer is a palindrome when it reads the same forward and backward. -> returns true;
// num = 123; --> returns false
console.log(isPalindrome(num));