"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//y nghia cua ke thua trong OOP
var Tuong = /** @class */ (function () {
    function Tuong(ten, motatuong, kynang) {
        this.ten = ten;
        this.motatuong = motatuong;
        this.kynang = kynang;
    }
    Tuong.prototype.showThongTin = function () {
        var kn = "";
        for (var i = 0; i < this.kynang.length; i++) {
            if (i < this.kynang.length - 1) {
                kn += this.kynang[i];
                kn += " | ";
            }
            else {
                kn += this.kynang[i];
            }
        }
        console.log("\n        Ten tuong: " + this.ten + "\n        mo ta tuong: " + this.motatuong + "\n        ky nang: " + kn + "\n        ");
    };
    return Tuong;
}());
var Satthu = /** @class */ (function (_super) {
    __extends(Satthu, _super);
    function Satthu(ten, motatuong, kynang, donsatthu) {
        var _this = _super.call(this, ten, motatuong, kynang) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    Satthu.prototype.showThongTin = function () {
        _super.prototype.showThongTin.call(this);
        console.log("don sat thu: " + this.donsatthu);
    };
    return Satthu;
}(Tuong));
var ashe = new Tuong("Ashe", "Thanh kiem", ["kn1", "kn2", "kn3", "kn4", "kn5"]);
var ahri = new Tuong("Ahri", "Ho ly 9 duoi", ["hut hon", "lua ho ly", "qua cau ma thuat", "hon gio", "kn5"]);
//su dung class Satthu
var Talon = new Satthu("Talon", "sat thu bong dem", ["kn1", "am khi", "tieu hon", "kn4"], "Sat thu vo hinh");
// console.log(ashe.showThongTin());
// console.log(ahri.showThongTin());
Talon.showThongTin();
