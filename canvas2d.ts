export default class canvas2d {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  get width(): number {
    return this.canvas.clientWidth;
  }
  get height(): number {
    return this.canvas.clientHeight;
  }
  constructor(canvasId: string) {
    this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
    const ctx = this.canvas.getContext("2d");
    if (ctx !== null) {
      this.ctx = ctx;
    } else {
      throw new Error("can't get 2d context.");
    }
  }
  private rotate(
    obj: {
      x: number;
      y: number;
      w: number;
      h: number;
      degree: number;
    },
    callback: Function
  ) {
    const { x, y, w, h, degree } = obj;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(x + w / 2, y + h / 2);
    this.ctx.rotate((degree * Math.PI) / 180);

    callback();

    this.ctx.restore();
  }
  public fillBackground(color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
  public fillRect(obj: {
    x: number;
    y: number;
    w: number;
    h: number;
    color?: string;
    degree?: number;
  }) {
    const { x, y, w, h, color, degree } = obj;
    if (color) {
      this.ctx.fillStyle = color;
    }
    if (degree === undefined) {
      this.ctx.fillRect(x, y, w, h);
    } else {
      this.rotate(
        {
          x: x,
          y: y,
          w: w,
          h: h,
          degree: degree
        },
        () => {
          this.ctx.fillRect(-w / 2, -h / 2, w, h);
        }
      );
    }
  }
  public fillCircle(obj: {
    cx: number,
    cy: number,
    r: number,
    color?: string
  }) {
    const {cx, cy, r, color} = obj

    this.ctx.beginPath();
    this.ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
    if (color !== undefined) {
      this.ctx.fillStyle = color;
    }
    this.ctx.fill();
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
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
