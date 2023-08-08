import {Pitanje} from "./pitanje";
import {Kartica} from "../kartica";
import { generisiDomElement, generisiParagraf } from "../mydom.service";
import { randomArray } from "../myRandomArray.service";

import * as Rx from 'rxjs';

export const tacan = "tacan";
export const netacan = "netacan";

export class PitanjePojamDefinicije extends Pitanje{

    constructor(kartica){

        super(kartica);
    }

    prikaziPitanje(parent = document.body){
        if(this.setKartica.brKartica === 1 ){
            alert("Nema smisla pokretati test sa jednom karticom");
            return;
        }
        this.divPitanje = generisiDomElement("div","card","",parent);
        this.divPitanje.id = `PitanjePojamDefinicije${this.kartica.id}`;

        const blockquote = generisiDomElement("blockquote","blockquote mb-0","",this.divPitanje);
        const pPojam = generisiParagraf("",this.kartica.pojam,blockquote);

        const divDefinicije = generisiDomElement("div","card card-body","",this.divPitanje);

        let brojNetacnihOdgovora = parseInt(this.setKartica.brKartica / 2);

        randomArray()
        let randomDefenitionNum = randomArray(brojNetacnihOdgovora,this.setKartica.brKartica);
        while(randomDefenitionNum.includes(this.setKartica.nizKartica.indexOf(this.kartica)) ){         
            randomDefenitionNum = randomArray(brojNetacnihOdgovora,this.setKartica.brKartica);
        }

        let randomIndex = randomArray(brojNetacnihOdgovora+1,brojNetacnihOdgovora+1);

        let nizRandomDefinicija = new Array(randomIndex.length);
        let indexTacnogOdgovora = randomIndex[nizRandomDefinicija.length - 1];

        let pomDefinicija;
        for(let i=0;i<nizRandomDefinicija.length; i++)
        {
            nizRandomDefinicija[randomIndex[i]] = i === nizRandomDefinicija.length - 1 ? 
            this.kartica.definicija : 
            this.setKartica.nizKartica[randomDefenitionNum[i]].definicija; 
        }

        nizRandomDefinicija.forEach((definicija,i) => {
            nizRandomDefinicija[i] = generisiDomElement("div","card-header",definicija,divDefinicije);
        });
        
        const tacanOdgovorObservable = Rx.Observable.fromEvent(nizRandomDefinicija[indexTacnogOdgovora],"click")
        .map(event => nizRandomDefinicija[indexTacnogOdgovora])
        .subscribe( divTacanOdgovor => {

            this.oznaciOdgovor(nizRandomDefinicija,divTacanOdgovor,tacan);
            tacanOdgovorObservable.unsubscribe();
        });

        let nizNetacnihOdgovoraObservable = [];
        nizRandomDefinicija.forEach((def,i) => {
            if(i !== indexTacnogOdgovora){

                nizNetacnihOdgovoraObservable[i] = Rx.Observable.fromEvent(def,"click")
                .subscribe(event => {

                    this.oznaciOdgovor(nizRandomDefinicija,def,netacan);
                    nizNetacnihOdgovoraObservable[i].unsubscribe();
                })
            }
        })


        return this.divPitanje;
    }

    oznaciOdgovor(nizDivOdgovora, divOdgovor , tacanILInetacan) {
        nizDivOdgovora.forEach((def,i) => {
            if(def !== divOdgovor){
                def.parentNode.removeChild(def);
            }
        });
        divOdgovor.dataset.tacanNetacan = tacanILInetacan;
        divOdgovor.className = tacanILInetacan === netacan ? "card" : divOdgovor.className;
    }
    //proveriOdgovor(odgovor){}

    
}