
import { SetKartica } from './setKartica';
import { Kartica } from './kartica';


export class Folder {
    id: string;
    ime: string;
    opis: string;
    slika;

    nizSetKartica: SetKartica[] = [];
    brSetovaKartica: number;
    brKartica: number;

    // nova prostija sktruktura
    nizKartica: Kartica[];

    //#region Konstruktor
    constructor(id: string, ime: string, opis: string = null, slika = null) {
        // super();
        this.id = id;
        this.ime = ime;
        this.opis = opis;
        this.slika = new Image(); // Mada jos uvek ne znam kako ce da cuvamo sliku
        this.nizSetKartica = [];

        this.nizKartica = [];
    }
    //#endregion

    dodajKarticu(kartica: Kartica) {
        if(kartica !== undefined) {
            this.nizKartica.push(kartica);
            this.brKartica++;
        }
    }
    // dodajKarticu(kartica: Kartica) {
    //     console.log("dodajKarticu u folder!");
    //     let mojBool = false;
    //     console.log("mojBool: ", mojBool);
    //     mojBool = this.nizSetKartica[this.brSetovaKartica].dodajKarticu(kartica);
    //     console.log("mojBool: ", mojBool);
    //     if ( !mojBool) {
    //         console.log(true);
    //         this.brSetovaKartica++;
    //         this.nizSetKartica[this.brSetovaKartica].dodajKarticu(kartica);
    //         this.brKartica++;
    //     } else {
    //         console.log(false);
    //         this.brKartica++;
    //     }
    //     return true;
    // }
    prikaziSveKartice() {
        this.nizSetKartica.forEach(setKar => setKar.prikaziSveKartice());
    }


}