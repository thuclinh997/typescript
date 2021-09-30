abstract class dienthoai {
    protected ten: string;

    abstract guitinnhan(): void;

    abstract goidienthoai(): string;
}
class Android extends dienthoai {
    protected ten:string;
    public guitinnhan(): void {
        console.log("gui tin nhan");
    }
    public goidienthoai(): string {
        return("goi dien thoai");
    }
}
let samsung = new Android;
samsung.guitinnhan();
export { }