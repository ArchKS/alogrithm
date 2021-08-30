// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 * @method 穷举法
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let max = [];
    for (let i = 0; i < s.length; i++) {
        let startIndex = i;
        max[startIndex] = 0;
        for (let j = startIndex; j <= s.length; j++) {
            // 前面的字符串为：s[startIndex,j]
            // 判断第j个位置的字符串，与前面的是否相同
            // 如果相同，则退出，并保留前面已经截取到的字符串
            let suffix = s.substring(startIndex, j); // 左开右闭
            max[startIndex] = suffix.length;
            if (suffix.indexOf(s[j]) >= 0) {
                break;
            }
        }
    }
    let maxnumber = max.sort((a, b) => b - a)[0];
    console.log(`${s} : ${maxnumber}`);
    return maxnumber;
};


// lengthOfLongestSubstring("pwwkew");
// lengthOfLongestSubstring(" ");
// lengthOfLongestSubstring("bbbbb");
// lengthOfLongestSubstring("abcabcabc");
// lengthOfLongestSubstring("au");





/**
 * @param {string} s
 * @return {number}
 * @method 滑动窗口
 */

var lengthOfLongestSubstring2 = function(s) {
    // abc[ ... ]abc
    // 新出现的字符串不在窗口内，则将该字符添加到窗口并向前移动
    // 如果新出现的字符串在窗口内，则将窗口头部到该字符串的长度删除
    let max = 0;
    let window = [];
    for (let v of s) {
        if (window.indexOf(v) === -1) {
            window.push(v);
            max = Math.max(window.length, max);
        } else {
            let index = window.indexOf(v);
            window.splice(0, index + 1); // splice(startIndex,deleteCount);
            window.push(v);
        }
    }
    console.log(`${s}: ${max}`);
    return max;
}

lengthOfLongestSubstring2("pwwkew");
lengthOfLongestSubstring2(" ");
lengthOfLongestSubstring2("bbbbb");
lengthOfLongestSubstring2("abcabcabc");
lengthOfLongestSubstring2("au");