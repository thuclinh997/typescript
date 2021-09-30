"use strict";
exports.__esModule = true;
var DienThoai = /** @class */ (function () {
    function DienThoai(Ten, Gia, Sao, Mausac) {
        this.ten = Ten;
        this.gia = Gia;
        this.sao = Sao;
        this.mausac = Mausac;
    }
    DienThoai.prototype.showNoiDung = function () {
        return "San pham " + this.ten + " co gia la: " + this.gia + ",\n        Danh gia: " + this.sao + " co " + this.mausac.length + " mau la:\n        " + this.mausac[0] + "," + this.mausac[1] + "," + this.mausac[2];
    };
    return DienThoai;
}());
var sp1 = new DienThoai("Samsung", 9000, 4.5, ["xanh", "do", "tim"]);
console.log(sp1);
