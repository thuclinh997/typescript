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
var KhoaHoc = /** @class */ (function () {
    function KhoaHoc(id, ten, dodai) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    KhoaHoc.prototype.xemKhoaHoc = function () {
        console.log("\n            Id khoa hoc: " + this.id + "\n            Ten khoa hoc: " + this.ten + "\n            Do dai: " + this.dodai + "\n        ");
    };
    return KhoaHoc;
}());
var KhoaLapTrinh = /** @class */ (function (_super) {
    __extends(KhoaLapTrinh, _super);
    function KhoaLapTrinh(id, ten, dodai, fileDinhKem) {
        var _this = _super.call(this, id, ten, dodai) || this;
        _this.fileDinhKem = fileDinhKem;
        return _this;
    }
    KhoaLapTrinh.prototype.xemKhoaHoc = function () {
        _super.prototype.xemKhoaHoc.call(this);
        console.log("File dinh kem la " + this.fileDinhKem);
    };
    KhoaLapTrinh.prototype.test1 = function () {
        console.log("ten khoa hoc: " + this.ten);
    };
    return KhoaLapTrinh;
}(KhoaHoc));
var khoa1 = new KhoaHoc(1, "hoc HTML", 12);
console.log(khoa1.ten); //outside class
// console.log(khoa1.id);
var khoa2 = new KhoaLapTrinh(2, 'lap trinh PHP', 7, "filemau.txt");
khoa2.test1();
