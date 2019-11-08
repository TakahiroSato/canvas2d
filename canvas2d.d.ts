export default class canvas2d {
    private static _instance;
    private canvas;
    private ctx;
    constructor(canvasId: string);
    drawText(text: string, x: number, y: number, color?: string, size?: number, font?: string): void;
    clear(): void;
}
