/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let entirety = nums1.concat(nums2).sort((a, b) => a - b);
    let length = entirety.length;
    let mid;
    if (length % 2 === 0) {
        mid = (entirety[length / 2 - 1] + entirety[length / 2]) / 2;
    } else {
        mid = entirety[(length - 1) / 2];
    }
    console.log(`${nums1} + ${nums2} : ${mid}`);
    return mid;
};


findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1, 2], [3, 4]);
findMedianSortedArrays([0, 0], [0, 0]);
findMedianSortedArrays([], [1]);