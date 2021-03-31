// 给定一个字符串s，只会出现`{}[]()`这6种字符，实现isMatch(str)来判断这个字符串中的括号是否匹配

function isMatch(s) {
    let pattern = {
        "[": "]",
        "(": ")",
        "{": "}"
    }

    let stack = [];
    let key = Object.keys(pattern);
    let val = key.map(v => pattern[v]);
    for (let v of s) {
        if (key.includes(v)) { // 如果是左括号，则进栈
            stack.push(v)
        } else if (val.includes(v)) { // 如果是右括号，则取出栈顶元素，查找左括号在映射表中的值，并判断是否相等
            let top = stack.pop();
            if (pattern[top] !== v) { // 不匹配
                return false
            }
        }
    }
    return true
}

// ------------ test
console.log(isMatch('[]'));
console.log(isMatch('[)'));
console.log(isMatch('(){()[{}]}'));