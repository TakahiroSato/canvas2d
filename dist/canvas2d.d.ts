import vec2 from "./vec2";
declare class canvas2d {
    private canvas;
    private ctx;
    get width(): number;
    get height(): number;
    constructor(canvasId: string);
    private rotate;
    fillBackground(color: string): void;
    fillRect(obj: {
        x: number;
        y: number;
        w: number;
        h: number;
        color?: string;
        degree?: number;
    }): void;
    fillCircle(obj: {
        cx: number;
        cy: number;
        r: number;
        color?: string;
    }): void;
    drawLines(points: vec2[], obj?: {
        lineWidth?: number;
        color?: string;
        degree?: number;
        center?: vec2;
    }): void;
    drawText(text: string, x: number, y: number, color?: string, size?: number, font?: string): void;
    clear(): void;
}
export { vec2, canvas2d };
