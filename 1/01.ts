let chu: string;
chu = "Linh";
let chu2: string;
chu2 = "sinh nam 1997";
// console.log(`
// Xin chao ${chu}, co phai ban ${chu2}
// `);
//kieu number
let x: number = 10;
// console.log(x);
//kieu mang (chu)
let sv: string[];
sv = ["Linh", "Lan", "Mai"];
// console.log(sv[0]);
for (let i = 0; i < sv.length; i++) {
    // console.log(sv[i]);
}
//mang kieu number
let soNguyen: number[] = [1, 5, 7, 3, 6];
for (let i = 0; i < soNguyen.length; i++) {
    // console.log(soNguyen[i]);

}
//kieu dung sai
let flag: boolean;
flag = true;
//kieu enum
enum trangthai { moidangky = 10, dathutien = 20, hoanthanh = 90 };
// console.log(trangthai.dathutien);
//kieu tuple
let tuple: [string, string, number, number];
tuple = ["linh", "nam", 1997, 4];
// console.log(tuple);
// kieu any
let any1:any;
any1 = {
    dongho:{
        giatien:10000,
        mausac:"do",
        cannang:'1kg'
    },
    xemay:"honda"
}
console.log(any1.dongho);
//function
export { };