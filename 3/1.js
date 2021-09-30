"use strict";
exports.__esModule = true;
//function trong TS
function tinhtong() {
    return 100;
}
// console.log(tinhtong());
// kieu string
function kieustring() {
    return "hello world";
}
var x = kieustring();
// console.log(x);
//kieu mang
function mangString() {
    return ['HTML', 'PHP', "JAVASCRIPT"];
}
// console.log(mangString());
//kieu so
function mangSo() {
    return [1, 7, 5, 3, 8, 4, 6];
}
// console.log(mangSo());
// kieu doi tuong
function doiTuong() {
    var nhanVatGame = {
        ten: "chuot",
        kyNang: {
            kn1: "tang hinh",
            kn2: "ban doc"
        }
    };
    return nhanVatGame;
}
// console.log(doiTuong()['kyNang']['kn1']);
//function co tham so
function tinhTBC(a, b) {
    var c = (a + b) / 2;
    return c;
}
// console.log(tinhTBC(4,8));
//ham khong co ten
var z = function (x) {
    x = "hello wold";
    console.log(x);
};
var g = function (x, y) {
    return x + y;
};
//function =>
var h = function (x) {
    return x + 10;
};
console.log(h(10));
