/**
 * @param {string} s
 * @return {string}
 * @url {https://leetcode-cn.com/problems/longest-palindromic-substring}
 * @desc 我们枚举每一种边界情况，并从对应的子串开始不断地向两边扩展。如果两边的字母相同，我们就可以继续扩展，例如从 P(i+1,j-1)P(i+1,j−1) 扩展到 P(i,j)P(i,j)；如果两边的字母不同，我们就可以停止扩展，因为在这之后的子串都不能是回文串了。
 */
var longestPalindrome = function (s) {
    if(s.length == 1){
        return s;
    }else if(s.length === 2){
        if(s[0] === s[1]) return s;
    }

    let [start, end] = [0, 0]
    // 从中间向两边延伸，找到回文中心
    for (let index = 0; index < s.length; index++) {
        let [left1, right1] = expandAroundCenter(s, index, index); // 奇数个
        let [left2, right2] = expandAroundCenter(s, index, index + 1); // 偶数个
        if (right1 - left1 > end - start) {
            [start, end] = [left1, right1]
        }
        if (right2 - left2 > end - start) {
            [start, end] = [left2, right2]
        }
    }
    return s.substring(start,end+1);
};



const expandAroundCenter = function (reminder, start, end) {
    while (start >= 0 && end <= reminder.length && reminder[start] === reminder[end]) {
        start -= 1;
        end += 1;
    }
    return [start + 1, end - 1];
}


let hw = longestPalindrome("aba")
console.log(hw);