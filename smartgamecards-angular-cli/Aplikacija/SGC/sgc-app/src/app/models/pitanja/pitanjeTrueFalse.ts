import {Pitanje} from "./pitanje";
import {Kartica} from "../kartica";

export class PitanjeTrueFalse extends Pitanje
{
    pojam: string;
    definicija: string;

    constructor(kartica:Kartica, pojam: string = kartica.pojam, definicija: string = kartica.definicija) {
        super(kartica);
        this.pojam = pojam;
        this.definicija = definicija;
    }

    generisiPitanje(kartica:Kartica){}
    
    proveriOdgovor(odgovor:boolean): boolean {
        return (this.kartica.pojam.toUpperCase() === this.pojam.toUpperCase() &&
                this.kartica.definicija.toUpperCase() === this.definicija.toUpperCase()) === odgovor;
    }

}