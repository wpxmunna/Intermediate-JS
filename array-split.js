const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// For slice--
const part = nums.slice(2, 4);
console.log(part);
console.log(nums);

// For splice--
const remove = nums.splice(2, 5);
console.log(remove);
console.log(nums);

// Joint any array--
const together = nums.join("");
console.log(together);
console.log(nums);