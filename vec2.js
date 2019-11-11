"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vec2 = /** @class */ (function () {
    function vec2(x, y) {
        this.x = x;
        this.y = y;
    }
    vec2.prototype.add = function (x, y) {
        this.x += x;
        this.y += y;
    };
    vec2.prototype.addv = function (v) {
        this.x += v.x;
        this.y += v.y;
    };
    return vec2;
}());
exports.default = vec2;
