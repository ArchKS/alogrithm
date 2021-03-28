// 选择排序 O(n^2)
// 通过n-i次关键字比较，找出n-i+1个记录中的最小记录

function selectSort(arr) {
    let min;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        min = i;
        for (let j = i + 1; j < len; j++) {
            // 找出后序数组中最小的，并记录其下标
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        // 选择排序只需要交换N次
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp
    }
}


let arr = [10, 2, 11, 123, 35, 546, 7, 72, 123, 92]
selectSort(arr)
console.log(arr);

// |---------------------min-----------|