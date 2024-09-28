class Vehicle {
    constructor(name, price){
        this.name = name;
        this.price = pirce;
    }
    move(){
        console.log('gari mai badi dari khai mail etc')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketprice){
        super(name, price);
        this.seat = seat;
        this.ticketprice = ticketprice;
    }
}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price, load)
        this.load = load;

    }
}