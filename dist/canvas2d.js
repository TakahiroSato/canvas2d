"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vec2_1 = __importDefault(require("./vec2"));
exports.vec2 = vec2_1.default;
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
        var cx = obj.cx, cy = obj.cy, w = obj.w, h = obj.h, color = obj.color, degree = obj.degree;
        if (color) {
            this.ctx.fillStyle = color;
        }
        if (degree === undefined) {
            this.ctx.fillRect(cx - w / 2, cy - h / 2, w, h);
        }
        else {
            this.rotate(degree, function () {
                _this.ctx.fillRect(-w / 2, -h / 2, w, h);
            }, {
                x: cx - w / 2,
                y: cy - h / 2,
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
        var _a, _b, _c, _d;
        var _e = (function () {
            if (obj !== undefined) {
                return obj;
            }
            else {
                return {};
            }
        })(), lineWidth = _e.lineWidth, color = _e.color, degree = _e.degree, center = _e.center;
        var _center = new vec2_1.default((_b = (_a = center) === null || _a === void 0 ? void 0 : _a.x, (_b !== null && _b !== void 0 ? _b : 0)), (_d = (_c = center) === null || _c === void 0 ? void 0 : _c.y, (_d !== null && _d !== void 0 ? _d : 0)));
        var pos = points.map(function (p) {
            if (degree) {
                return new vec2_1.default(-(_center.x - p.x), -(_center.y - p.y));
            }
            else {
                return new vec2_1.default(p.x, p.y);
            }
        });
        if (lineWidth !== undefined) {
            this.ctx.lineWidth = lineWidth;
        }
        var _draw = function () {
            _this.ctx.beginPath();
            if (color !== undefined) {
                _this.ctx.strokeStyle = color;
            }
            _this.ctx.moveTo(pos[0].x, pos[0].y);
            pos.shift();
            pos.map(function (p) {
                _this.ctx.lineTo(p.x, p.y);
            });
            _this.ctx.stroke();
        };
        if (degree !== undefined) {
            this.rotate(degree, _draw, {
                x: _center.x,
                y: _center.y,
                w: 0,
                h: 0,
            });
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
