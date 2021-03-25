/* 
    折半查找 
    low|-------------mid---------\value/---|high 
    
    基本思想：
    1. val > mid, low = mid + 1;
    2. val < mid, high = mid -1;
    3. val = mid, return
*/
// 有序列表
let list = [2, 18, 61, 50, 100, 47, 56, 88, 74, 59, 82, 25, 32, 2, 69, 17, 11, 72, 39, 35].sort((a, b) => a - b);

function halfSearch(arr, val) {
    let low = 0,
        high = arr.length,
        mid = Math.ceil((low + high) / 2);
    // 当低位指针和高位指针重叠时，结束查找
    while (low !== high) {
        if (val > arr[mid]) {
            low = mid + 1;
        } else if (val < arr[mid]) {
            high = mid - 1;
        } else {
            return mid
        }
        mid = Math.ceil((low + high) / 2);
    }
    return -1;
}

let index = halfSearch(list, 74);
let value = list[index];

console.log(index,value);