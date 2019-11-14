export default class vec2 {
  public x: number;
  public y: number;
  get length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
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
  public rotate(degree: number) {
    const rad = (Math.PI * degree) / 180;
    [this.x, this.y] = [
      this.x * Math.cos(rad) - this.y * Math.sin(rad),
      this.x * Math.sin(rad) + this.y * Math.cos(rad)
    ];
  }
}
