//interface class
interface TuongInterface{
    ten:string;
    mau:number;
    satthuong:number;
    mota:string;
    xemtuong():void;
    donkynang(mau:number):any;
    bienve():void;
}
class Tuong implements TuongInterface{
    protected ten:string;
    protected mau:number;
    protected satthuong:number;
    protected mota:string;
    public xemtuong():void{

    }
    public donkynang(mau:number):any{

    }
    public bienve():void{
        
    }

}
export{}