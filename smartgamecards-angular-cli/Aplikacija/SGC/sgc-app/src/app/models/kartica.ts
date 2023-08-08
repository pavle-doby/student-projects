import { SetKartica } from './setKartica';

export class Kartica {
    id:number; // id je uvek samo id, bez _(donje crte)
    pojam:string;
    definicija:string;
    slika;
    tag:string;
    tezina:number;
    naucena:number;
    naucenaProcenti: number;
    posecenost:number;
//#region Konstruktor
    constructor(
        id:number,
        pojam:string,
        definicija:string,
        slika = null,
        tag:string = null,
        tezina:number = null ,
        naucena:number = 0,
        naucenaProcenti: number = 0,
        posecenost:number = 0) {
        // super();
        this.id = id;
        this.pojam = pojam;
        this.definicija = definicija;
        this.slika= slika;
        this.tag = tag;
        this.tezina = tezina;
        this.naucena = naucena;
        this.naucenaProcenti = naucenaProcenti;
        this.posecenost = posecenost;
    }
//#endregion
    // mojPar(pojam, definicija) {
    //     return this.pojam === pojam && this.definicija === definicija;
    // }
    // generisiSetPitanja(setKartica) {

    // }

}