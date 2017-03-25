class Animal {
    constructor(public name: string) { }
    move(meters : number) : string{
        return this.name + " moved " + meters + "m.";
    }
}

class Snake extends Animal {
    move() : string{
        console.log("Slithering...");
        return super.move(5);
    }
}

class Horse extends Animal {
    move() : string{
        console.log("Galloping...");
        return super.move(45);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

document.body.innerHTML = sam.move();