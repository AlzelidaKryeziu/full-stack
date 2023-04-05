/*const uc = require('upper-case');
let testString = 'this is a test string in lower case'
console.log(uc.upperCase(testString));

const calc = require('./Utils/calculate')

console.log(calc.calculate(1,2));
const shuma=calc.dhjetshi(52,2)
console.log('shuma', shuma);

calc.test(1, 1).then((data)=>{
    console.log(calc.minus(data, 1));
}).catch((error)=>{
    console.log('error'.error);
})

const calc = require('./Utils/calculate')
const calculate = require('./promise')

console.log(calc.sum(1,2))
const shuma = calc.sum(3)
console.log('shuma',shuma);

const shumaFinal = calc.minus(shuma,15)
console.log('shumaFinal',shumaFinal)


calc.test(1,1).then((data)=>{
     console.log(calc.minus(data,1));
}).catch((error)=>{
    console.log('error',error);
})
/*
calculate.sum(5,5).then((shuma)=>{
    console.log(shuma);
    calculate.minus(shuma,2).then((shuma1)=>{
        console.log(shuma1);
        calculate.minus(shuma,'a').then((shuma2)=>{
            console.log(shuma2);
            calculate.minus(shuma,2).then((shumaFinal)=>{
                console.log(shumaFinal)
            }).catch((err)=>{
                console.log(err);
            })
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
    })
}).catch((err)=>{
    console.log(err);
})

async function test() {
    try {
      const shuma = await calculate.sum(2, 10);
      console.log(shuma);
      const shuma1 = await calculate.minus(shuma, 4);
      console.log(shuma1);
      const shuma2 = await calculate.minus(shuma, 'a');
      console.log(shuma2);
      const shumaFinal = await calculate.minus(shuma, 2);
      console.log(shumaFinal);
    } catch (error) {
      console.log(error);
    }
  }
  test();

//console.log('shuma',shuma)*/

