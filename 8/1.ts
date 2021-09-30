class KhoaHoc {
    public id: number;
    public ten: string;
    public dodai: number;
    constructor(id: number, ten: string, dodai: number) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    xemKhoaHoc(): void {
        console.log(`
            Id khoa hoc: ${this.id}
            Ten khoa hoc: ${this.ten}
            Do dai: ${this.dodai}
        `);
    }
}
class KhoaLapTrinh extends KhoaHoc {
    fileDinhKem: string;
    constructor(id: number, ten: string, dodai: number, fileDinhKem: string) {
        super(id, ten, dodai);
        this.fileDinhKem = fileDinhKem;
    }
    xemKhoaHoc(): void {
        super.xemKhoaHoc();
        console.log(`File dinh kem la ${this.fileDinhKem}`);

    }
    test1():void{
        console.log(`ten khoa hoc: ${this.ten}`);
        
    }
}
let khoa1 = new KhoaHoc(1, "hoc HTML", 12);
console.log(khoa1.ten);//outside class
// console.log(khoa1.id);
let khoa2 = new KhoaLapTrinh(2,'lap trinh PHP',7,"filemau.txt");
khoa2.test1();


export { }