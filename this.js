class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
}
const kodom = new Person('kodom ali', 25);
console.log(kodom);
kodom.sleep()
const badam = new Person('kodom ali badam kha', 26);
badam.sleep()

console.log(badam);

const lazy = kodom.sleep();
lazy();



