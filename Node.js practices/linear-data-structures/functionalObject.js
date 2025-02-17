function createUser(name, email) {
    return {
        name,
        email,
        role: "user",
        greet() {
            return `Hello, my name is ${this.name} and my email is ${this.email}.`;
        }
    };
}

const user1 = createUser("Farrukh", "farrukh@example.com");
console.log(user1.greet());

function createCar(brand, model, year = new Date().getFullYear()) {
    return {
        brand,
        model,
        year,
        getCarInfo() {
            return `This is a ${this.brand} ${this.model} from year ${this.year}.`;
        }
    }
}

const car1 = createCar("Toyota", "Corolla", 2022);
console.log(car1.getCarInfo());

const car2 = createCar("Honda", "Civic");  // Uses default year
console.log(car2.getCarInfo());