import {Pitanje} from "./pitanje";
import {Kartica} from "../kartica";

export class PitanjeTrueFalse extends Pitanje
{

    constructor(kartica){super(kartica)}

    prikaziPitanje(parent = document.body){}    
    proveriOdgovor(odgovor){}

    
}