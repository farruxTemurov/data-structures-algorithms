var isValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let cur = s[i];

        if (stack.length > 0) {
            let last = stack[stack.length - 1];
            if (isPair(last, cur)) {
                stack.pop();
                continue;
            }
        }
        stack.push(cur);
    }
    return stack.length === 0;
}

function isPair(last, cur) {
    return (last == '(' && cur == ')') ||
        (last == '{' && cur == '}') ||
        (last == '[' && cur == ']');
}

s = "()";
console.log(isValid(s));
s = "()";
console.log(isValid(s));
