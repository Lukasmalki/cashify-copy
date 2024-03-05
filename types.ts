export interface IGroup{
    name:string;
    moms:number;
}

export interface IArtikel{
    name:string;
    price:number;
    group:IGroup;
    bg:string;
    
}

export interface IRabbat{
    percent:number;
    type:boolean //0 for artikel 1 for nota
}

export interface IKvitto{
    ArtikelList:Array<IArtikel>;
    Kopia:boolean;
    Rabbat?:IRabbat;
    Betalning:number; //0 inte betald, 1 kort, 2, swish, 3 Kontant
    zNr:number
}


export interface IParkeradeKvitton{
    [item:string]:IKvitto;
}

export interface IZRapport{
    ZNr:number;
    Betalningar:Array<IKvitto>;
    Växel_belopp:number;
    Växel_in:number;
    Växel_ut:number;
}

export interface IKund{
    nummer:number;
    type:boolean; //0 privat, 1 företag
    name : string;
    telefon:string;
}

export interface IKassa{
    Artiklar:IArtikel[];
    Grouper:IGroup[];
    Kvitton:IKvitto[];
    TidKvitton:IKvitto[];
    ParkeradeKvitton:IParkeradeKvitton;
    ZRapport:IZRapport[];
    Kunder:IKund;
}

export interface ILayout{
    rows:number,
    cols:number,
}