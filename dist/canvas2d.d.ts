import vec2 from "./vec2";
declare class c2dImageData {
    private _imageData;
    get imageData(): ImageData;
    get data(): Uint8ClampedArray;
    get width(): number;
    get height(): number;
    constructor(img: ImageData);
    setColor(x: number, y: number, color: {
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    }): void;
}
declare class canvas2d {
    private canvas;
    private ctx;
    get width(): number;
    get height(): number;
    constructor(canvasId: string);
    private rotate;
    fillBackground(color: string): void;
    fillRect(obj: {
        cx: number;
        cy: number;
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
    createImageData(width?: number, height?: number): c2dImageData;
    getImageData(width?: number, height?: number): c2dImageData;
    putImageData(img: c2dImageData, dx?: number, dy?: number): void;
    drawText(text: string, x: number, y: number, color?: string, size?: number, font?: string): void;
    clear(): void;
}
export { vec2, canvas2d, c2dImageData };
