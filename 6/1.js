"use strict";
exports.__esModule = true;
var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Prosessing"] = 11] = "Prosessing";
    state[state["Finesh"] = 12] = "Finesh";
})(state || (state = {}));
var CongViec = /** @class */ (function () {
    function CongViec(id, ten, trangthai) {
        this.id = id;
        this.ten = ten;
        this.trangThai = trangthai;
    }
    CongViec.prototype.thongtin = function () {
        return "Id: " + this.id + " - ten: " + this.ten + " - trang thai: " + this.trangThai;
    };
    return CongViec;
}());
var cv1 = new CongViec(1, "hoc HTML", state.Create);
console.log(cv1.thongtin());
