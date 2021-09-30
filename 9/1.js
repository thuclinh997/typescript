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
var dienthoai = /** @class */ (function () {
    function dienthoai() {
    }
    return dienthoai;
}());
var Android = /** @class */ (function (_super) {
    __extends(Android, _super);
    function Android() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Android.prototype.guitinnhan = function () {
        console.log("gui tin nhan");
    };
    Android.prototype.goidienthoai = function () {
        return ("goi dien thoai");
    };
    return Android;
}(dienthoai));
var samsung = new Android;
samsung.guitinnhan();
