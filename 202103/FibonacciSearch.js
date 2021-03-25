// 斐波那契查找

let fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

let list = [2, 18, 61, 50, 88, 74, 59, 82, 25, 32, 2, 69, 17, 11, 72, 39, 35].sort((a, b) => a - b);

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

let index = fibSearch(list, 591);
let value = list[index];
console.log(index, value);

// References
// https://zq99299.github.io/dsalg-tutorial/dsalg-java-hsp/08/04.html