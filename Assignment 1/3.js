// Reverse the given array

let arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(arr_1.reverse());
const reversedArray =[];
for (let i = arr_1.length - 1; i >= 0; i--) {
    const value = arr_1[i];
    
    reversedArray.push(value)
}

console.log(reversedArray)
