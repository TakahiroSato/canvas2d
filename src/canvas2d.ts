import vec2 from "./vec2";
class canvas2d {
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
    degree: number,
    callback: Function,
    obj?: {
      x: number;
      y: number;
      w: number;
      h: number;
    }
  ) {
    const { x, y, w, h } = (() => {
      if (obj !== undefined) {
        return obj;
      } else {
        return { x: 0, y: 0, w: this.width, h: this.height };
      }
    })();
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
    cx: number;
    cy: number;
    w: number;
    h: number;
    color?: string;
    degree?: number;
  }) {
    const { cx, cy, w, h, color, degree } = obj;
    if (color) {
      this.ctx.fillStyle = color;
    }
    if (degree === undefined) {
      this.ctx.fillRect(cx-w/2, cy-h/2, w, h);
    } else {
      this.rotate(
        degree,
        () => {
          this.ctx.fillRect(-w / 2, -h / 2, w, h);
        },
        {
          x: cx-w/2,
          y: cy-h/2,
          w: w,
          h: h
        }
      );
    }
  }
  public fillCircle(obj: {
    cx: number;
    cy: number;
    r: number;
    color?: string;
  }) {
    const { cx, cy, r, color } = obj;

    this.ctx.beginPath();
    this.ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
    if (color !== undefined) {
      this.ctx.fillStyle = color;
    }
    this.ctx.fill();
  }
  public drawLines(
    points: vec2[],
    obj?: {
      lineWidth?: number;
      color?: string;
      degree?: number;
      center?: vec2;
    }
  ) {
    const { lineWidth, color, degree, center } = (() => {
      if (obj !== undefined) {
        return obj;
      } else {
        return {};
      }
    })();
    const _center = new vec2(center?.x ?? 0, center?.y ?? 0);
    const pos = points.map(p => {
      if (degree) {
        return new vec2(-(_center.x-p.x), -(_center.y-p.y));
      } else {
        return new vec2(p.x, p.y);
      }
    });
    if (lineWidth !== undefined) {
      this.ctx.lineWidth = lineWidth;
    }
    const _draw = () => {
      this.ctx.beginPath();
      if (color !== undefined) {
        this.ctx.strokeStyle = color;
      }
      this.ctx.moveTo(pos[0].x, pos[0].y);
      pos.shift();
      pos.map(p => {
        this.ctx.lineTo(p.x, p.y);
      });
      this.ctx.stroke();
    };
    if (degree !== undefined) {
      this.rotate(degree, _draw, {
        x: _center.x,
        y: _center.y,
        w: 0,
        h: 0,
      });
    } else {
      _draw();
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
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

export {vec2, canvas2d}