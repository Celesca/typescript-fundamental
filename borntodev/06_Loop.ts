// Loop for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Loop for of

let foods: string[] = ["Pizza", "Burger", "Hotdog"];

for (let item of foods) {
    console.log(item);
}

// Loop for in
for (let index in foods) {
    console.log(index);
}


// Do while
let count:number = 5;

do {
    console.log(count);
    count--;
}
while (count > 2)