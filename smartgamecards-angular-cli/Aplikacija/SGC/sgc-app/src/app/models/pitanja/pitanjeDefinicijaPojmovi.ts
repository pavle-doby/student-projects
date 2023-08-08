import {Pitanje} from "./pitanje";
import {Kartica} from "../kartica";

export class PitanjeDefinicijaPojmovi extends Pitanje {

    constructor(kartica:Kartica) {
        super(kartica);
    }

    generisiPitanje(kartica:Kartica) {}
    proveriOdgovor(odgovor:string) {}


}