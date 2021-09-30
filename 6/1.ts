enum state {
    Create = 10,
    Prosessing = 11,
    Finesh = 12
} 
class CongViec {
    id: number;
    ten: string;
    trangThai: state;
    constructor(id: number, ten: string, trangthai: state) {
        this.id = id;
        this.ten = ten;
        this.trangThai = trangthai;
    }
    thongtin():string{
        return `Id: ${this.id} - ten: ${this.ten} - trang thai: ${this.trangThai}`;
    }
}
let cv1 = new CongViec(1, "hoc HTML",state.Create);
console.log(cv1.thongtin());

export { };