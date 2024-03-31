if (false || true) {
    console.log("True");
}

if (true && true) {
    console.log("True");
}

let a: number = 10, b = 20;
if (a < b) 
{
    console.log("a < b");
}
else if(a > b)
{
    console.log("a > b");
}

// Ternary Operator
a > b ? console.log("a > b") : console.log("a < b");

// Switch case

let selectMenu : number = 4;

switch(selectMenu){
    case 0 : console.log("Menu 0"); break;
    case 1 : console.log("Menu 1"); break;
    case 2 : console.log("Menu 2"); break;
    default: console.log("Menu not found");
}