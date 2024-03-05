import { IKvitto, IArtikel, IGroup, IParkeradeKvitton, IRabbat, IZRapport, IKassa, IKund, ILayout } from "./types"

enum UpdaterType {

}
class Kassa implements IKassa {
    //memory data start
    Artiklar: IArtikel[];
    Grouper: IGroup[];
    Kunder: IKund;
    Kvitton: IKvitto[];
    ParkeradeKvitton: IParkeradeKvitton;
    TidKvitton: IKvitto[];
    ZRapport: IZRapport[];
    ScreenKvitto: IKvitto;
    Layout: ILayout;
    //memory data end


    constructor() {
        this.Grouper = [{
            name: "Pizza",
            moms: 12
        }]
        this.Artiklar = [{
            group: this.Grouper[0],
            name: "Vesuvio",
            price: 90,
            bg: ""
        }]
        this.Kvitton = [{ ArtikelList: [this.Artiklar[0]], Betalning: 1, Kopia: false, zNr: 0 }]
        this.ScreenKvitto = {
            ArtikelList: [],
            Betalning: 0,
            Kopia: false,
            zNr: 0,
        }
        this.Layout = {
            cols: 4,
            rows: 4
        }
    }
    //html selectors start
    articleContainer = document.querySelector('.article-container');
    menuButtonClick = document.querySelector('.menu');
    menuContainer = document.querySelector('.menu-container')
    pressXs = document.querySelectorAll('.close-menu');
    pressKassaText = document.querySelector('.kassa');
    pressFunctionsText = document.querySelector('.functions');
    functionsContainer = document.querySelector('.functions-container');
    xRapportBtn = document.querySelector('.x-rapport-button');
    xRapportContainer = document.querySelector('.x-rapport-container');
    cashifyContainer = document.querySelector('.cashify');
    printXrapport = document.querySelector('.skrivut-button');
    pleaseWait = document.querySelector('.vänligen-vänta-container');
    mailXrapport = document.querySelector('.maila-button');
    mailXrapportContainer = document.querySelector('.mail-xrapport-container');
    avbrytMail = document.querySelector('.avbryt-mail-button');
    avbrytXBtn = document.querySelector('.avbryt-xrapport-button');
    zRapportBtn = document.querySelector('.dagsavslut-button');
    zRapportContainer = document.querySelector('.z-rapport-container');
    avbrytZBtn = document.querySelector('.avbryt-zrapport-button');
    okBtn = document.querySelector('.ok-button');
    zRapportCreated = document.querySelector('.zrapport-created-container');
    logOutBtn = document.querySelector('.logout');
    digitBtns = document.querySelectorAll('.digits-container button');
    hiddenPassword = document.querySelector('.login-container h2');
    clearPasswordBtn = document.querySelector('.login-clear-button');
    loginOkBtn = document.querySelector('.login-ok-button');
    loginContainer = document.querySelector('.login-container');
    parkReceiptPopup = document.querySelector('.parkreceipt-popup');
    noArticlesFound = document.querySelector('.no-articles-found-popup');
    noArticlesOkBtn = document.querySelector('.no-articles-ok');
    cancelParkReceiptBtn = document.querySelector('.avbryt-parkreceipt-button');
    comment = document.querySelector('.parkreceipt-popup input')
    getReceiptButtons = document.querySelectorAll('.get-receipt');
    getReceiptContainer = document.querySelector('.getreceipt-container');
    confirmParkBtn = document.querySelector('.confirm-parkreceipt-button');
    pScrollContainer = document.querySelector('.p-scroll-container');
    updater = (type) => {

    }



}


