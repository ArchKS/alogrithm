// 直接插入排序
// 将一个记录插入到已经排好序的有序表中

// function insertSort(arr) {
//     let len = arr.length;
//     for (let i = 1; i < len; i++) {
//         // 如果 后面的无序数组中第一项arr[i] < 有序的最后一项arr[i-1]，则将其插入到前面正确的位置
//         let j = i;
//         let temp = arr[i]; // 无序第一个值
//         if (arr[i] < arr[i - 1]) {
//             for (; j > 0; j--) {
//                 if(temp > arr[j]) break;
//                 arr[j] = arr[j - 1];
//             }
//             arr[j] = temp
//         }
//     }
// }


function insertSort(arr) {
    // 数组分为两块，有序 | 无序
    // 将无序数组中的项依次取出，放到有序数组中

    for (let i = 1; i < arr.length; i++) {
        let unorderVal = arr[i]; // 无序数组第一项，准备插入到有序中去
        let orderVal = arr[i - 1]; // 有序数组第一项
        let index; // 插入unorderVal的位置
console.log(unorderVal,orderVal);
        if (unorderVal < orderVal) {
            for (let j = i; j > 0; j--) { // 从后往前遍历有序数组，寻找插入unorderVal的合适位置
                arr[j] = arr[j - 1];
                if (unorderVal > arr[j]) {
                    index = j;
                    break;
                }
            }
            arr[index] = unorderVal;
        }
    }
}

let arr = [10, 2, 11, 123, 35, 92]
insertSort(arr)
console.log(arr);