interface IGroup{
    name:string;
    moms:number;
}

interface IArtikel{
    name:string;
    price:number;
    group:IGroup;
}

interface IRabbat{
    percent:number;
    type:boolean //0 for artikel 1 for nota
}

interface IKvitto{
    ArtikelList:Array<IArtikel>;
    Status:boolean;
    Kopia:boolean;
}

interface IParkeradeKvitton{
    [item:string]:IKvitto;
}

