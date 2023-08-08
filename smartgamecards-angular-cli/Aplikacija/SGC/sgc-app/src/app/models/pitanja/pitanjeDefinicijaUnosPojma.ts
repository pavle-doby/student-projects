import {Pitanje} from "./pitanje";
import {Kartica} from "../kartica";

export class PitanjeDefinicijaUnosPojma extends Pitanje
{

    constructor(kartica:Kartica){super(kartica)}

    generisiPitanje(kartica:Kartica){}
    proveriOdgovor(odgovor:string){}

    
}