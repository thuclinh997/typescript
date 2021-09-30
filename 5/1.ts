class DienThoai {
    ten: string;
    gia: number;
    sao: number;
    mausac: string[];
    constructor(Ten: string, Gia: number, Sao: number, Mausac: string[]) {
        this.ten = Ten;
        this.gia = Gia;
        this.sao = Sao;
        this.mausac = Mausac;
    }
    showNoiDung() {
        return `San pham ${this.ten} co gia la: ${this.gia},
        Danh gia: ${this.sao} co ${this.mausac.length} mau la:
        ${this.mausac[0]},${this.mausac[1]},${this.mausac[2]}`;
    }
}
let sp1 = new DienThoai("Samsung", 9000, 4.5, ["xanh", "do", "tim"]);
console.log(sp1);

export { }