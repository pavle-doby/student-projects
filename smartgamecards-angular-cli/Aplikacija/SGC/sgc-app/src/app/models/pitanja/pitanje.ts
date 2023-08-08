import { Kartica } from "../kartica";
import { Folder } from "../folder";

// ova klasa bi trebala da imitirra interfejs
export class Pitanje {
    tajmer; // ? ovo je pod znakom pitanja...
    kartica:Kartica;
    folder: Folder;
    nizOdgovora: string[];

    constructor(kartica:Kartica = null, folder: Folder = null, nizOdgovora: string[] = null ) {
        this.kartica = kartica;
        this.folder = folder;
        this.nizOdgovora = nizOdgovora;
    }
    generisiPitanje(kartica:Kartica) {}
    // proveriOdgovor(odgovor:any): boolean {
    //     return true;
    // }

}