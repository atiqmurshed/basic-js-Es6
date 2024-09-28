// const numbers = [2, 4, 6, 8, 10];

// const double = [];
// for(const num of numbers){
//     const doubel = num * 2;
//     double.push(doubel);
// }
// console.log(double);

const number = [2, 6, 4, 7, 9];

function doubleIt(num){
    // console.log('now is num', num);
    return num * 2;
}
const output = number.map(n => n *2)
const double2 = n => n * 2;
const result = number.map(doubleIt);
// console.log(result);


const numbersi = [2,4,5,1,5]
function doublet(numi){
    return numi * 2;
}
const resul = doublet(numbersi[2]);
console.log(resul);