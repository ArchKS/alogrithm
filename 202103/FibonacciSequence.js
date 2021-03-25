/* 
    第一个月初有一对刚诞生的兔子
    第二个月之后（第三个月初）它们可以生育
    每月每对可生育的兔子会诞生下一对新兔子
    兔子永不死去
*/

/* 
    F(n) = 0, n=0;
         = 1, n=1;
         = F(n-1) + F(n-2), n>1;
*/

// 两种解法：常规迭代和递归
// n标识第n个月份

function iterate(n) {
    // 把计算的数值放到数组中
    let arr = [];
    arr[0] = 1;
    arr[1] = 1;

    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[arr.length - 1]
}
function recurse(n) {
    // 递归
    if (n == 1 || n === 2) {
        return 1;
    }
    return recurse(n - 1) + recurse(n - 2);
}

// ![](./images/fib.png)
// 加缓存优化
/* 不加缓存，12级递归需要计算144次
 * 加上缓存，12级递归需要计算10次
 * 根据上图，随着树的分支越多，重复计算的量就越大，比如Fn(9)就重复计算了三次+
 * 我们可以将计算好的数据放入缓存中，如果缓存中有，则不必再次计算
 */
function recurseCache(n) {
    let cache = [0, 1, 1];
    let i = 0;
    function _fbi(n) {
        if (cache[n]) return cache[n];
        cache[n] = _fbi(n - 1) + _fbi(n - 2);
        i++;
        return cache[n]
    }
    let res = _fbi(n);
    console.log(i);
    return res;
}

recurse(12)
recurseCache(12)



/* References：
[1] https://leetcode-cn.com/problems/fibonacci-number/solution/dong-tai-gui-hua-tao-lu-xiang-jie-by-labuladong/

*/