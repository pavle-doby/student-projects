import {Pitanje} from "./pitanje";
import {Kartica} from "../kartica";

export class PitanjePojamDefinicije extends Pitanje {

    nizOdgovora: string[];
    constructor(kartica:Kartica, defNetacna0: string , defNetacna1: string) {
        super(kartica);
        this.nizOdgovora = [];
        this.nizOdgovora[0] = kartica.definicija;
        this.nizOdgovora[1]= defNetacna0;
        this.nizOdgovora[2] = defNetacna1;
    }

    generisiPitanje(kartica:Kartica) {}
    proveriOdgovor(odgovor:string) {}
}