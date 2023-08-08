import {Pitanje} from "./pitanje";
import {Kartica} from "../kartica";
import {generisiDomElement, generisiInput, generisiParagraf} from "../mydom.service";
import {progressBar} from "../myBootstrap";

import * as Rxjs from 'rxjs';


export class PitanjeDefinicijaUnosPojma extends Pitanje
{

    constructor(kartica = null){
        super(kartica)
        
    }
    prikaziPitanje(parent = document.body){

        this.divPitanje = generisiDomElement("div","divPitanjeDefinicijaUnosPojma","",parent);

        const karticaDefinicija = generisiParagraf("karticaDefinicija",this.kartica.definicija,this.divPitanje);
        const karticaPojam = generisiInput("input","karticaPojam",this.divPitanje);


        Rxjs.Observable.fromEvent(karticaPojam, "input")
        .debounceTime(1000)
        .map(ev => ev.target.value)
        .subscribe(text => {
            if(this.kartica.pojam === text){
                alert("Bravo");
            }
            else{
                alert(`Netacno, odgovor je: ${this.kartica.pojam}`);
            }
        });

        return this.divPitanje;
    }
    proveriOdgovor(odgovor){
        if(this.kartica.pojam === odgovor){
            console.log("Bravo"); 
            alert(`Bravo: ${this.kartica.pojam} ${this.kartica.definicija}`);    
        }
        else{
        console.log("Netacan odgovor:", odgovor);            
        }
    }

    
}