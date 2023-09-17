const testNums = [1, 2, 3, 4, 5, 6];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

const sumWhile = (nums) => {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
      total += nums[i];
      i++;
  }
  return total;
}

function sumRecursion(nums) {
  if (nums.length ===0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

const sumTheSimpleWay = (nums) => _.reduce(nums, function (memo, num) { return memo + num; }, 0);
console.log(sumFor(testNums));
console.log(sumWhile(testNums));
console.log(sumRecursion(testNums));
console.log(sumTheSimpleWay(testNums));

