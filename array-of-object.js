const products =[
    {id: 1, phone: 'lenovo', price: 40000},
    {id: 2, phone: 'dell', price: 70000},
    {id: 3, phone: 'walton', price: 50000},
    {id: 4, phone: 'iphone', price: 91200},
    {id: 5, phone: 'hp', price: 50000}

];
//map 
const names = products.map(product => product.phone);
// console.log(names);

const price = products.map(p => p.price);
// console.log(price);

products.forEach(p => console.log(p.id));


const expensive = products.filter(p => p.price > 50000)
// console.log(expensive);


const available = products.find(p => p.price < 50000);
console.log(available);

//reduce;
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);