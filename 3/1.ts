//function trong TS
function tinhtong(): number {
   return 100;
}
// console.log(tinhtong());
// kieu string
function kieustring(): string {
   return "hello world";
}
let x: string = kieustring();
// console.log(x);
//kieu mang
function mangString(): string[] {
   return ['HTML', 'PHP', "JAVASCRIPT"];
}
// console.log(mangString());
//kieu so
function mangSo(): number[] {
   return [1, 7, 5, 3, 8, 4, 6];
}
// console.log(mangSo());
// kieu doi tuong
function doiTuong(): any {
   var nhanVatGame: any = {
      ten: "chuot",
      kyNang: {
         kn1: "tang hinh",
         kn2: "ban doc"
      }
   }
   return nhanVatGame;
}
// console.log(doiTuong()['kyNang']['kn1']);
//function co tham so
function tinhTBC(a: number, b: number): number {
   let c: number = (a + b) / 2;
   return c;
}
// console.log(tinhTBC(4,8));
//ham khong co ten
let z = function (x: string): void {
   x = "hello wold";
   console.log(x);

}
let g: (x: number, y: number) => number = function (x, y) {
   return x + y;
}
//function =>
let h = (x: number): number => {
return x +10;
}
console.log(h(10));

export { }