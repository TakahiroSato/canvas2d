export default class vec2 {
    x: number;
    y: number;
    get length(): number;
    constructor(x: number, y: number);
    add(x: number, y: number): void;
    addv(v: vec2): void;
    rotate(degree: number): void;
}
