"use strict";
exports.__esModule = true;
//generic in typecript
//là hàm có thể truyền vào tham số và kiểu dữ liêu
function xem3(x) {
    return x;
}
console.log(xem3(999));
console.log(xem3("Wellcome Thục Linh"));
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.showInfo = function (x) {
        console.log(x);
    };
    return Computer;
}());
Computer.showInfo(["Dell", "Lenovo"]);
