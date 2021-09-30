"use strict";
exports.__esModule = true;
var NhanVatGame = /** @class */ (function () {
    function NhanVatGame(Ten_nhan_vat, Slogan, Mau) {
        this.ten_nhan_vat = Ten_nhan_vat;
        this.slogan = Slogan;
        this.mau = Mau;
    }
    NhanVatGame.prototype.chem = function () { };
    NhanVatGame.prototype.chay = function () { };
    NhanVatGame.prototype.hienThiTen = function () {
        return "\n        Nhan vat: " + this.ten_nhan_vat + "\n        slogan: " + this.slogan + "\n        mau: " + this.mau;
    };
    return NhanVatGame;
}());
var nv1 = new NhanVatGame("irelia", "y chi cua luoi kiem", 900.5);
var nv2 = new NhanVatGame("Azir", "Hoang de sa mac", 780.2);
console.log(nv1.hienThiTen());
console.log(nv2.hienThiTen());
