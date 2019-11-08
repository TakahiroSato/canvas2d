"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var canvas2d = /** @class */ (function () {
    function canvas2d(canvasId) {
        this.canvas = document.getElementById(canvasId);
        var ctx = this.canvas.getContext("2d");
        if (ctx !== null) {
            this.ctx = ctx;
        }
        else {
            throw new Error("can't get 2d context.");
        }
    }
    canvas2d.prototype.drawText = function (text, x, y, color, size, font) {
        if (color === void 0) { color = "#ffffff"; }
        if (size === void 0) { size = 10; }
        if (font === void 0) { font = "'ＭＳ　Ｐゴシック'"; }
        this.ctx.font = size + "pt " + font;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "top";
        this.ctx.fillText(text, x, y);
    };
    canvas2d.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    };
    return canvas2d;
}());
exports.default = canvas2d;
