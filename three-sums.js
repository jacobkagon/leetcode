var threeSumClosest = function(nums, target) {
    // edge cases
    if(nums.length < 3) return [];
    // sort array to implement O(n) two pointers inside the for loop
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[nums.length-1];

    for(let i = 0; i < nums.length - 2; i++) {
        // skip for better performance
        if(i===0 || (i>0 && nums[i]!==nums[i-1])) {
          // two pointers, O(n)
            let l = i + 1;
            let r = nums.length - 1;
            while(l < r) {
                let cur = nums[l] + nums[r] + nums[i];
                if(cur === target) return target;
                if(Math.abs(cur - target) < Math.abs(result - target)) result = cur;
                if(cur < target) {
                    l += 1;
                } else {
                    r -= 1;
                }
            }
        }
    }
return result;
};
