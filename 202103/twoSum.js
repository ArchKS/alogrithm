// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

/* 
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let obj = {};
    for (let index in nums) {
        let item = nums[index]
        // // 如果obj[item]不存在，则将其差值添加为属性名，index作为属性值 68:1
        // // 如果存在，则返回下标
        if (obj[item]) {
            return [obj[item], index]
        } else {
            val = target - item
            obj[val] = index;
        }
    }
};

console.log(twoSum([3, 2, 4], 6));