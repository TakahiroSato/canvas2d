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
    Object.defineProperty(canvas2d.prototype, "width", {
        get: function () {
            return this.canvas.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(canvas2d.prototype, "height", {
        get: function () {
            return this.canvas.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    canvas2d.prototype.rotate = function (obj, callback) {
        var x = obj.x, y = obj.y, w = obj.w, h = obj.h, degree = obj.degree;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(x + w / 2, y + h / 2);
        this.ctx.rotate((degree * Math.PI) / 180);
        callback();
        this.ctx.restore();
    };
    canvas2d.prototype.fillBackground = function (color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    };
    canvas2d.prototype.fillRect = function (obj) {
        var _this = this;
        var x = obj.x, y = obj.y, w = obj.w, h = obj.h, color = obj.color, degree = obj.degree;
        if (color) {
            this.ctx.fillStyle = color;
        }
        if (degree === undefined) {
            this.ctx.fillRect(x, y, w, h);
        }
        else {
            this.rotate({
                x: x,
                y: y,
                w: w,
                h: h,
                degree: degree
            }, function () {
                _this.ctx.fillRect(-w / 2, -h / 2, w, h);
            });
        }
    };
    canvas2d.prototype.fillCircle = function (obj) {
        var cx = obj.cx, cy = obj.cy, r = obj.r, color = obj.color;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
        if (color !== undefined) {
            this.ctx.fillStyle = color;
        }
        this.ctx.fill();
    };
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
        this.ctx.clearRect(0, 0, this.width, this.height);
    };
    return canvas2d;
}());
exports.default = canvas2d;
