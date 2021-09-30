//generic in typecript
//là hàm có thể truyền vào tham số và kiểu dữ liêu
function xem3<T>(x: T): T {
    return x;
}
console.log(xem3<number>(999));
console.log(xem3<string>("Wellcome Thục Linh"));
class Computer{
    static showInfo<T>(x: T):void{
        console.log(x);
        
    }
}
Computer.showInfo<string[]>(["Dell","Lenovo"]);
export { }