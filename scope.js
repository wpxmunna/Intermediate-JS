let bonus = 20;

function sum(first, second){
    let result =first + second;
    // But here result will work because result is in the scope 
    console.log(result);
    return result;
}

const output = sum(5, 7);
console.log(output);
// Here result is not defined because result is out of the scope
// console.log(result);