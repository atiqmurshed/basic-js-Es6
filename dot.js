
//dot notation;

const person = {
    name: 'hablu',
    age: 25,
    job: 'badam kha',
    3: 'third',
    'add-dress': 'kochu kheat',
}
const prop = 'job'
console.log(person.job);
console.log(person['job']);
console.log(person[prop]);
console.log(person['3']);
console.log(person['add-dress']);

// function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]));

// const {x, y, z} = {x: 1, y1: 2, z: 3};

// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}


const {price} = product;
// const {product.price} = product,
// const {price} = product.price;