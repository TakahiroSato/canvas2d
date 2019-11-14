export default class vec2 {
    x: number;
    y: number;
    get length(): number;
    constructor(x: number, y: number);
    add(x: number, y: number): vec2;
    addv(v: vec2): vec2;
    rotate(degree: number): vec2;
}
