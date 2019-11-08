"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vec2 = /** @class */ (function () {
    function vec2(x, y) {
        this.x = x;
        this.y = y;
    }
    return vec2;
}());
exports.vec2 = vec2;
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
    canvas2d.prototype.rotate = function (degree, callback, obj) {
        var _this = this;
        var _a = (function () {
            if (obj !== undefined) {
                return obj;
            }
            else {
                return { x: 0, y: 0, w: _this.width, h: _this.height };
            }
        })(), x = _a.x, y = _a.y, w = _a.w, h = _a.h;
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
            this.rotate(degree, function () {
                _this.ctx.fillRect(-w / 2, -h / 2, w, h);
            }, {
                x: x,
                y: y,
                w: w,
                h: h
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
    canvas2d.prototype.drawLines = function (points, obj) {
        var _this = this;
        var _a = (function () {
            if (obj !== undefined) {
                return obj;
            }
            else {
                return {};
            }
        })(), lineWidth = _a.lineWidth, color = _a.color, degree = _a.degree;
        var pos = __spreadArrays(points);
        if (lineWidth !== undefined) {
            this.ctx.lineWidth = lineWidth;
        }
        if (color !== undefined) {
            this.ctx.strokeStyle = color;
        }
        var _draw = function () {
            _this.ctx.beginPath();
            _this.ctx.moveTo(pos[0].x, pos[0].y);
            pos.shift();
            pos.map(function (p) {
                _this.ctx.lineTo(p.x, p.y);
            });
            _this.ctx.stroke();
        };
        if (degree !== undefined) {
            this.rotate(degree, _draw);
        }
        else {
            _draw();
        }
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
exports.canvas2d = canvas2d;
