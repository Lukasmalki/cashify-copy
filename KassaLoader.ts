import { IKvitto, IArtikel, IGroup, IParkeradeKvitton,IRabbat,IZRapport, IKassa, IKund } from "./types"


class Kassa implements IKassa {
    Artiklar: IArtikel[];
    Grouper: IGroup[];
    Kunder: IKund;
    Kvitton: IKvitto[];
    ParkeradeKvitton: IParkeradeKvitton;
    TidKvitton: IKvitto[];
    ZRapport: IZRapport[];
    constructor(){
        this.Grouper=[{
            name:"Pizza",
            moms:12
        }]
        this.Artiklar=[{
            group:this.Grouper[0],
            name:"Vesuvio",
            price:90
        }]
        
    }

}