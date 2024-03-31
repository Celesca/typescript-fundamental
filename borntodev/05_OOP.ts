class Point {
    y: number;
    readonly version: string = "1.0.1";

    _x: number = 0;

    get x(): number {
        this._x = this._x + 1;
        return this._x;
    }

    set x(value: number) {
        if (value < 0) {
            throw new Error("Value cannot be less than 0.");
        }
        this._x = value;
    }

    // Overloads
    constructor(x?: number, y?: number) {
        this._x = x || 0;
        this.y = y || 0;
    }

}

const point = new Point(1, 2);
point.x = 10;
console.log(`${point.x} ${point.y}`);
console.log(point._x); // not getter
console.log(point.x); // Getter
