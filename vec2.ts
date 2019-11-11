export default class vec2 {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  public add(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
  public addv(v: vec2) {
    this.x += v.x;
    this.y += v.y;
  }
}
