"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vec2 = /** @class */ (function () {
    function vec2(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(vec2.prototype, "length", {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        enumerable: true,
        configurable: true
    });
    vec2.prototype.add = function (x, y) {
        this.x += x;
        this.y += y;
    };
    vec2.prototype.addv = function (v) {
        this.x += v.x;
        this.y += v.y;
    };
    vec2.prototype.rotate = function (degree) {
        var _a;
        var rad = (Math.PI * degree) / 180;
        _a = [
            this.x * Math.cos(rad) - this.y * Math.sin(rad),
            this.x * Math.sin(rad) + this.y * Math.cos(rad)
        ], this.x = _a[0], this.y = _a[1];
    };
    return vec2;
}());
exports.default = vec2;
