var frequencySort = function(nums) {
    let frequency = {};

  for (let i = 0; i < nums.length; i++) {
    frequency[nums[i]] = (frequency[nums[i]] || 0) + 1;
  }

  return nums.sort((a,b) => frequency[a] - frequency[b] || b - a);
    
};