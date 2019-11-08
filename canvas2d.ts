export default class canvas2d {
  private static _instance: canvas2d;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  constructor(canvasId: string) {
    this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
    const ctx = this.canvas.getContext("2d");
    if (ctx !== null) {
      this.ctx = ctx;
    } else {
      throw new Error("can't get 2d context.");
    }
  }
  public drawText(
    text: string,
    x: number,
    y: number,
    color: string = "#ffffff",
    size: number = 10,
    font: string = "'ＭＳ　Ｐゴシック'"
  ) {
    this.ctx.font = `${size}pt ${font}`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = "left";
    this.ctx.textBaseline = "top";
    this.ctx.fillText(text, x, y);
  }
  public clear() {
    this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
  }
}
