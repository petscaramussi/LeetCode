/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [1, 2, 5, 6];
const target = 7;

var twoSum = function (nums, target) {

    let result = [];
    let sum = 0;

    for (let i = 0; nums.length - 1 > i; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum(nums, target));

