function sayTest(): string {
    return "Test";
}
console.log("Hello " + sayTest());

function sayPeople(name: string = "None", lastname: string = "None"): string {
    return name + "" + lastname
}

let result: string = sayPeople("Kittakorn", "Mami");
console.log(result);

// Rest Parameter
function sum(a: number, b: number, ...rest: number[]): number {
    return a + b + rest.reduce((a,b) => a + b, 0)
}

console.log("Sum: " + sum(1,2,3,4,5,6,7,8,9,10));

// Name Parameter
function add({x, y} : {x: number, y: number}) : number {
    return x + y;

}
console.log(add({y: 10 , x: 5}));