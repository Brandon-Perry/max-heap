// Use this file as a scratch pad to complete the problem at
// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Find the kth largest element in an unsorted array. Note that it is the kth
// largest element in the sorted order, not the kth distinct element.

let findKthLargest = function (nums, k) {
    selectionSort(nums);
    console.log(nums);
    return nums[k - 1];
};

function selectionSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let maxIdx = i;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[maxIdx] < nums[j]) {
                maxIdx = j;
            }
        }
        let temp = nums[i]
        nums[i] = nums[maxIdx];
        nums[maxIdx] = temp;
    }
    return nums;
}

let array1 = [3, 2, 1, 5, 6, 4];
let array2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
console.log(findKthLargest(array1, 2));
console.log(findKthLargest(array2, 4));