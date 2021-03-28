/* 
    斐波那契查找
    类似于折半查找，只不过折半不是平均对半分的，而是将左右长度分为满足斐波那契数列的项
    
    1. 原始数组的长度必须扩充至斐波那契数列中某一个值的长度
    2. 因为可以通过斐波那契数列的性质，将这一个扩充数组分成黄金分割的两段
    3. 分成两段后，就可以查找中间值，而这个中间值则可称为黄金分割点
    4. 查找该点，是否是所要查找的值，如果不是，则根据大小，可继续将某一段继续分割，查找他的黄金分割点

    ![示意图](../images/fibsearch.png)
    ![](https://zq99299.github.io/dsalg-tutorial/assets/img/image-20201018220112519.cb204ad1.png)
 */


// 找到返回下标，没找到返回-1
function fibSearch(arr, val) {
    let len = arr.length;
    let low = 0;
    let high = len;
    let k = 0;

    // 让arr长度接近于Fib数列的某一项的值,找到Fib值对应的下标
    while (len >= fibSequence[k]) {
        k++;
    }
    // 在len ~ Fib(k) 之间填充 数组的最后一项
    for (let i = len; i < fibSequence[k]; i++) {
        list[i] = list[len - 1];
    }

    if (val < arr[0] || val > arr[len - 1]) {
        return -1;
    }

    // 将数组按照 Fib 数列 前两项和相加 = 后一项的性值，拆分为左右两个数组
    // 将 Fib(n-2) 作为一个中间位置
    // 如果 val < midVal 则取Fib的左半部分
    // 如果 val > midVal 则取Fib的右半部分
    while (low <= high) {
        mid = low + fibSequence[k - 2] - 1;
        console.log('mid:', mid);
        if (val < list[mid]) {
            high = mid - 1;
            k -= 2;
        } else if (val > list[mid]) {
            low = mid + 1;
            k -= 1;
        } else {
            if (mid >= len) {
                return len;
            } else {
                return mid
            }
        }
    }
    return -1;
}
var fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

var list = [2, 59, 82, 25, 32, 2, 69, 17, 11, 72, 39, 35].sort((a, b) => a - b);

let index = fibSearch(list, 59);
let value = list[index];
console.log(index, value);

// References
// https://zq99299.github.io/dsalg-tutorial/dsalg-java-hsp/08/04.html