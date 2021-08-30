/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * @desc  给定一串字符，将其用Z字形排列
 * 设 numRows 行字符串分别为 s_1s , s_2s ,..., s_ns ，则容易发现：按顺序遍历字符串 s 时，每个字符 c 在 ZZ 字形中对应的 行索引 先从 s_1s 增大至 s_ns，再从 s_ns 减小至 s_1s 如此反复。因此，解决方案为：模拟这个行索引的变化，在遍历 s 中把每个字符填到正确的行 res[i]
 * @url https://leetcode-cn.com/problems/zigzag-conversion/
 */
var convert = function (s, numRows) {  
    if(numRows < 2) return s; // 如果只有一行，则不构成Z字形
    let res = new Array(numRows).fill("");
    console.log(res);
    let [i, flag] = [0, -1];
    for (let index = 0; index < s.length; index++) {
        res[i] += s[index];
        if (i === 0 || i === numRows - 1) flag = -flag;
        i += flag;
    }
    return res.join("");
};

let res = convert("AB", 1);
console.log(res);