import { IGenerisiTest } from "./iGenerisiTest";

import {generisiDomElement, generisiInput, generisiParagraf} from "./mydom.service";

import * as Rx from "rxjs";


export class Test extends IGenerisiTest{

    constructor(setKartica,id=0){
        super(setKartica);

        this.id = id;
        this.uradjenost = 0;
        this.datum = new Date();

        this.divTest;
    }

    generisiSetPitanjaSvimKarticama1(){
        //Original logika iz foldera za pokretanje testa:

        /*
        this.nizSetKartica.forEach((setKartica,index) => {
            const pomBtn = document.getElementById("PokreniTest1"+index);
            let btnClickCount = 0; // resava probelm

            Rx.Observable.fromEvent(pomBtn,"click")
            .subscribe(brojKlika => {
                
                
                let divCollapse = generisiDomElement("div","collapse","",document.getElementById("divTest"));
                divCollapse.id = `collapseExamplePokreniTest1${index}`;
                let divCollapseCard = generisiDomElement("div","card card-body","",divCollapse);

                setKartica.nizKartica.forEach((kartica,i) => {

                    let pitanje = new PitanjeDefinicijaUnosPojma();
                    //let pitanje = new PitanjePojamDefinicije();

                    kartica.dodajVrstuPitanja(0,pitanje, setKartica);
                    kartica.prikaziPitanje(0,divCollapseCard);
                });
            });
        });

        */
    }

    generisiTest(parent = document.body, idDugmetaKojePokreceTest, vrstaPitanja){
        this.divTest = parent; 

        const pomBtn = document.getElementById(idDugmetaKojePokreceTest);
        let btnClickCounter = 0;

        Rx.Observable.fromEvent(pomBtn,"click")
        .subscribe(event => {

            if(btnClickCounter % 2 === 0){
                
                let divCollapse = generisiDomElement("div","collapse","",this.divTest); 
                divCollapse.id = `collapseExample${idDugmetaKojePokreceTest}`;
                let divCollapseCard = generisiDomElement("div","card","",divCollapse);
    
                this.generisiSetPitanjaSvimKarticama(divCollapseCard,vrstaPitanja);

                const htmlBackToTop = `<a class="BackToTop" href="#">Back to top</a>`;
                const pBackToTop = generisiParagraf("float-right",htmlBackToTop,this.divTest);
            }
            else{
                while (this.divTest.firstChild) {
                    this.divTest.removeChild(this.divTest.firstChild);
                }
            }

            btnClickCounter++;
        });
    }
    generisiSetPitanjaSvimKarticama(parent = this.divTest, pitanje){
        this.setKartica.nizKartica.forEach((kartica,i) => {

            pitanje.setKarticu(kartica,this.setKartica);
            pitanje.prikaziPitanje(parent);
        });
    }
    dodajVrstuPitanja(pitanje){}
    

}