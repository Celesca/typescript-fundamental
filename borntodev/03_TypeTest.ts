

// Array declaration
const myArray: number[] = [1, 2, 3];
let myArray2: any[] = [1, "Aaron", true];
console.log(myArray2);
console.log(myArray2[1]);
console.log(myArray2.pop());
myArray2.push("Mine");
console.log(myArray2);

// Tuple - Array with fixed number of elements with fixed data types
let employee: [number, string, string, boolean] = [1, "Mister P", "Developer", true];
console.log(employee[1]);

// Array Tuple
let product: [number, string][] = [ [1, "Mobile"], [2, "Laptop"] ];
console.log(product);
product.push([3, "Tablet"]);
console.log(product);

// Enum - Set of named constants
enum WorkStatus {
    Task = 1,
    Working,
    Done
}

console.log(WorkStatus.Task);


const app_name = "My App"; // Const used for the constant value
function sayHello() {
    if (true)
    {
        // Var is the global variable in whole program
        var myName: string = "Bob";
        var myAge: number;
        // Let is the local variable in the block
        let canVote = true;
        var i;
    }
    console.log(myName);
}

sayHello()