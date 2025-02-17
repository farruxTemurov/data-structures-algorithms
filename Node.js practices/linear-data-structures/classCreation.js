class Person {

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    birthday() {
        this.age++;
    }

    introduce() {
        return `Hello my name is ${this.name}, I'm ${this.age} years old, and I'm ${this.gender}`;
    }
}

const person1 = new Person("Farrukh", 18, "male");
person1.birthday();
console.log(person1.introduce());