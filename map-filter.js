//  Previous System ---

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const output = [];
for(let i = 0; i< numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

console.log(output);

// Using Map ---

const numbers1 = [10, 11, 12, 13, 14];

const result1 = numbers1.map(function(element, index, array){
    console.log(element, index, array);
    // return element * element;
})
// console.log(result1);

// another away to declare map---

const numbers2 = [1, 2, 3, 4, 5];
const square = numbers2.map(element => element * element);
const result = numbers2.filter(element => element > 2);
console.log(square);
console.log(result);