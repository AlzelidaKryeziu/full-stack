// Get the sum of all elements within array and the sum of two array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
sum1=0;
sum2=0;
let arr_3=[]
for(let i of arr_1){
    sum1+=i
}

for(let i of arr_2){
    sum2+=i
}
let sum =sum1 + sum2
console.log(sum);

function mbledh(x){
    let rez = 0;
    for (let i of x) {
        rez += [i];
    }
    return rez;
}
console.log(mbledh(arr_1))
console.log(mbledh(arr_2))
console.log(mbledh(arr_1) + mbledh(arr_2))