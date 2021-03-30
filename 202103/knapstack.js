// 背包问题
// 0-1背包问题：给定n种物品和一背包。物品 i 的重量似乎 wi，其价值为 vi，背包的容量为 c。问应该如何选择装入背包中的物品，使得装入背包中物品的总价值最大？
// https://www.jianshu.com/p/a66d5ce49df5


// 构造一个 nxm 的数组 ， n=C，m=bag.length
/* Goods\Weight     1       2      3      4
 * Guitar         1500    1500    1500   1500 
 * Sound          1500    1500    1500   3000
 * Computer       1500    1500    2000   1500+2000
CELL[i][j] = {
    1. 上一个单元格的值 CELL[i-1][j] 的值
    2. 当前商品的价值 + 剩余空间的价值 
}
*  
*/
let val = [1500, 3000, 2000]
let wei = [1, 4, 3]

function knapstack(val, wei, C) {
    /* val 东西的价值
     * wei 东西的重量
     * C   背包的承重
     */
    // 1. 构造一个NXM的数组，N为东西个数，M为背包承重
    let res = new Array(val.length).fill(0).map(v => new Array(C).fill(0))
    for (let i = 0; i < val.length; i++) { // 循环物品
        for (let j = 1; j <= C; j++) { // 迭代重量
            //  i      为当前物品下标
            //  j      为当前背包重量
            // res 0 层的时候，将背包中第一项放入res数组(如果放得下的话)
            if (i === 0) {
                res[i][j - 1] = wei[i] <= j ? val[i] : 0;
            } else {
                let topVal = res[i - 1][j - 1]; // 上层最大值
                let curVal; // 当前层的数值
                if (wei[i] < j) { // 如果当前承重较为富裕，则再装点以前的东西
                    curVal = val[i] + res[i][j - wei[i]]; // res[i][j - wei[i]] 找到当 weight = j-wei[i] 时的最大价值
                } else if (wei[i] === j && val[i] > topVal) { // 如果当前承重正好，则看哪个更值钱
                    curVal = val[i]
                } else { // 当前承重不太行，则用以前最行的那一个
                    curVal = topVal;
                }
                // 看看之前最行的那一个值和现在计算的值谁大，取大的那一个
                res[i][j - 1] = topVal > curVal ? topVal : curVal;
            }
        }
    }
    console.log(res);
    console.log('maxVal:', res[res.length - 1][res[0].length - 1]);
}

knapstack(val, wei, 4);