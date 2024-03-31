class Person {
    name: string = "";
    constructor(name: string) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hi, ${this.name}`);
    }
}

class Employee extends Person {
    salary:number = 0;
    constructor(name: string, salary:number) {
        super(name);
        this.salary = salary;
    }
    sayHi() {
        super.sayHi();
        console.log(`Salary: ${this.salary}`);
    }
}

const person = new Employee("Aaron", 1000);
person.sayHi();