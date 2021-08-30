/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * @desc  给定一串字符，将其用Z字形排列
 *        假设有N行，则没有个s的下标是从0～n，然后又从n～0的，所以只要在临界点进行一次反转，
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