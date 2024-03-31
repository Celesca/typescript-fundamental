class Human {
    name: string = ''
    age: number = 0
    surname: string = ''

    sayHello() {
        console.log('Hello', this.name, this.surname)
    }
}

const user1:any = new Human()
user1.name = "John"
user1.surname = "Doe"

user1.sayHello()