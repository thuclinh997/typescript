"use strict";
exports.__esModule = true;
var chu;
chu = "Linh";
var chu2;
chu2 = "sinh nam 1997";
// console.log(`
// Xin chao ${chu}, co phai ban ${chu2}
// `);
//kieu number
var x = 10;
// console.log(x);
//kieu mang (chu)
var sv;
sv = ["Linh", "Lan", "Mai"];
// console.log(sv[0]);
for (var i = 0; i < sv.length; i++) {
    // console.log(sv[i]);
}
//mang kieu number
var soNguyen = [1, 5, 7, 3, 6];
for (var i = 0; i < soNguyen.length; i++) {
    // console.log(soNguyen[i]);
}
//kieu dung sai
var flag;
flag = true;
//kieu enum
var trangthai;
(function (trangthai) {
    trangthai[trangthai["moidangky"] = 10] = "moidangky";
    trangthai[trangthai["dathutien"] = 20] = "dathutien";
    trangthai[trangthai["hoanthanh"] = 90] = "hoanthanh";
})(trangthai || (trangthai = {}));
;
// console.log(trangthai.dathutien);
//kieu tuple
var tuple;
tuple = ["linh", "nam", 1997, 4];
// console.log(tuple);
// kieu any
var any1;
any1 = {
    dongho: {
        giatien: 10000,
        mausac: "do",
        cannang: '1kg'
    },
    xemay: "honda"
};
console.log(any1.dongho);
