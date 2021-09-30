//interface co ban
interface nguoi{
    tuoi:number;
    ten:string;
}
function xemTT(motnguoi: nguoi):void{
    console.log(`
    xin chao ${motnguoi.ten},nam nay ban ${motnguoi.tuoi} tuoi phai khong
    `);
    
}
xemTT({tuoi:20,ten:"linh"});
export { }