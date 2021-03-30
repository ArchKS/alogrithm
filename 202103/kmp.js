// 暴力匹配

/* function violence(str1, str2) { // 判断str2是否在str1中
    let i = 0, j = 0;
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    if (j = str2.length) {
        return i - j;
    } else {
        return -1;
    }
}

console.log(violence('abcdefg', 'cde')); */

// KMP算法
// 生成部分匹配表，格式为[0, 0, 0, 0,1, 2, 0]
/* 
    1. 求出最大长度表，
    2. 根据最大长度表，求出next数组 
        - 因为next是根据最大前缀后缀匹配求的的，比如ABAB,当len=3时 ABA prefix[A,AB] suffix[A,BA]，可得共有项最大匹配长度为"A".length=1，所以next[i+1] = 1; ==> violNext()
        - 第二种办法就是用getNext方法求解，但算法看不懂 
    3. 进行模式匹配
        - 如果j = -1，或者当前字符匹配成功（即S[i] == P[j]），都令i++，j++，继续匹配下一个字符；
        - 如果j != -1，且当前字符匹配失败（即S[i] != P[j]），则令 i 不变，j = next[j]。此举意味着失配时，模式串P相对于文本串S向右移动了j - next [j] 位。

        比如AABD字符串的next数组为：
        A 没有前缀和后缀，length=0
        AA，前缀[A]，后缀[A] 最长公共项[A] length=1
        AAB 前缀[A,AA] 后缀[B AB] 最长公共项 length=0
        AABD 前缀[A,AB,AAB] 后缀[D,BD,ABD] 无公共项 length=0
        字符串  A A B D
        下标    0 1 2 0

        next数组需要把整体右移一位，然后第一位补-1，即 [ -1 0 1 2 ] 
*/
function violNext(needle) {
    // 1. 列出每个字串
    // 2. 列出字串的前缀列表和后缀列表
    // 3. 找出前缀列表和后缀列表的公共项
    // 4. 求出公有项的最大长度
    let len = needle.length;
    let next = [-1];
    for (let i = 1; i <= len; i++) {
        let prefix = [],
            suffix = [];
        sub = needle.slice(0, i);      // 截取子串,如 "ABC" 子串最长length-1
        for (let j = 1; j < i - 1; j++) {   // i 为截取字符串长度
            prefix.push(sub.slice(0, j));   // 构造前缀列表和后缀列表
            suffix.push(sub.slice(i - j));
        }
        // 找出前缀列表 和 后缀列表的交集, 查看交集字符串的长度
        let diff = [...suffix, ...prefix].filter(v => suffix.includes(v) && prefix.includes(v)).sort((a, b) => b.length - a.length);

        next[i] = diff.length !== 0 ? diff[0].length : 0;
    }
    return next
}

function getNext(sub) {
    // 计算字符串s的next值
    let next = [-1];
    let j = 0, k = -1;
    while (j < sub.length - 1) {
        if (k == -1 || sub[k] == sub[j]) {
            ++k;
            ++j;
            next[j] = k;
        } else {
            k = next[k];
        }
    }
    return next;
}

function kmp(s, sub) {
    let next = getNext(sub);
    let i = 0, j = 0;
    while (i < s.length && j < sub.length) {
        if (j === -1 || s[i] === sub[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    if (j === sub.length) {
        return i - j;
    } else {
        return -1;
    }
}


let index = kmp('BBC ABCDAB ABCDABCDABDE', 'ABCDABD');
console.log(index);

// References：
// https://www.cnblogs.com/zzuuoo666/p/9028287.html
// https://www.bilibili.com/video/BV1E4411H73v?p=163
// http://jakeboxer.com/blog/2009/12/13/the-knuth-morris-pratt-algorithm-in-my-own-words/
// http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html
// https://leetcode-cn.com/problems/implement-strstr/solution/kmp-suan-fa-xiang-jie-by-labuladong/