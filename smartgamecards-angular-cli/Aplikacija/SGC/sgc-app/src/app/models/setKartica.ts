import { Kartica } from './kartica';

// Komponent - Intefjes za Folder/Oblast
export class SetKartica {
    n:number;
    brKartica:number;
    nizKartica: Kartica[];

    //#region Konstruktor
    constructor(n:number = 5) {
        this.nizKartica = [];
        this.brKartica = 0;
    }
    //#endregion
    dodajKarticu(kartica:Kartica) {
        console.log("dodajKarticu u setKartica, kartica: ", kartica);
        if(this.n > this.brKartica) {
            this.nizKartica.push(kartica);
            this.brKartica++;

            return true;
        } else {
            return false;
        }
    }
    prikaziSveKartice() {
        this.nizKartica.forEach(ele => console.log(ele));
    }
    // dodajNizKartica(nizKartica: Kartica[]){
    //     if(nizKartica.length <= 5){
    //         this._nizKartica = nizKartica;
    //         this._brKartica = nizKartica.length;
    //     }
    // }
}