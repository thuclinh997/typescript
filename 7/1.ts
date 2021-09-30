//y nghia cua ke thua trong OOP
class Tuong {
    ten: string;
    motatuong: string;
    kynang: string[];
    constructor(ten: string, motatuong: string, kynang: string[]) {
        this.ten = ten;
        this.motatuong = motatuong;
        this.kynang = kynang;
    }
    showThongTin(): void {
        let kn: string = "";
        for (let i = 0; i < this.kynang.length; i++) {
            if (i < this.kynang.length - 1) {
                kn += this.kynang[i];
                kn += " | ";
            }
            else {
                kn += this.kynang[i];

            }
        }
        console.log(
            `
        Ten tuong: ${this.ten}
        mo ta tuong: ${this.motatuong}
        ky nang: ${kn}
        `);
    }
}
class Satthu extends Tuong {
    donsatthu: string;
    constructor(ten: string, motatuong: string, kynang: string[], donsatthu: string) {
        super(ten, motatuong, kynang);
        this.donsatthu = donsatthu;
    }

    showThongTin(): void {
        super.showThongTin();
        console.log(`don sat thu: ${this.donsatthu}`);
    }
}
let ashe = new Tuong("Ashe", "Thanh kiem", ["kn1", "kn2", "kn3", "kn4", "kn5"]);
let ahri = new Tuong("Ahri", "Ho ly 9 duoi", ["hut hon", "lua ho ly", "qua cau ma thuat", "hon gio", "kn5"]);
//su dung class Satthu
let Talon = new Satthu("Talon", "sat thu bong dem", ["kn1", "am khi", "tieu hon", "kn4"], "Sat thu vo hinh");
// console.log(ashe.showThongTin());
// console.log(ahri.showThongTin());
Talon.showThongTin();

export { }