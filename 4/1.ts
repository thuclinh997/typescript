class NhanVatGame {
    protected ten_nhan_vat: string;
    protected slogan: string;
    protected mau: number;

    public constructor(Ten_nhan_vat: string, Slogan: string, Mau: number) {
        this.ten_nhan_vat = Ten_nhan_vat;
        this.slogan = Slogan;
        this.mau = Mau
    }
    public chem() { }
    public chay() { }
    public hienThiTen(){
        return `
        Nhan vat: ${this.ten_nhan_vat}
        slogan: ${this.slogan}
        mau: ${this.mau}`;
    }
}
let nv1 = new NhanVatGame("irelia", "y chi cua luoi kiem", 900.5);
let nv2 = new NhanVatGame("Azir", "Hoang de sa mac", 780.2);
console.log(nv1.hienThiTen());
console.log(nv2.hienThiTen());

export { }