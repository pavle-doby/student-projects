import {generisiDomElement, generisiInput, generisiParagraf} from "./mydom.service.js";
import { SetKartica } from "./setKartica";
import { Kartica } from "./kartica";
import { PitanjeDefinicijaUnosPojma } from "./pitanja/pitanjeDefinicijaUnosPojma";
import { PitanjePojamDefinicije } from "./pitanja/PitanjePojamDefinicije";
import { Test } from "./test";

import Put, { myPut } from './myPut';
import { myPost } from './myPost';

import {btnForModal, modalZaKarticu, modal, collapseExampleDOM, basciCardWithLinks,collapseButton,collapseExample, basicCard, basicCardwithButton} from "./myBootstrap";
import * as Rx from "rxjs";




export class Folder{

    //#region Konstruktor
    constructor(id=null, oblast="Folder", opis="koji sazdrzi kartice", slika=null, brKartica=0, brSerovaKartica=0, nizSetKartica=null, n = 800, )
    {
        this.id = id;
        this.oblast = oblast;
        this.opis = opis;
        this.slika = slika;// Mada jos uvek ne znam kako ce da cuvamo sliku

        this.brKartica = brKartica;
        this.brSetovaKartica = brSerovaKartica === undefined ? 0 : brSerovaKartica;
    
        this.nizSetKartica = nizSetKartica === null ? [] : nizSetKartica;

        if(this.brSetovaKartica === 0)
            this.nizSetKartica.push(new SetKartica());

        this.boolPrikaz = false;

        this.divFolder;
        this.divTest;

        this.url = "http://localhost:3000/korisnici/"; // malo je lose ovo hard-kodirati....
        
    }
    //#endregion

    loadJSONtoFolder(jsonObj){
        this.id = jsonObj.id;
        this.oblast = jsonObj.oblast;
        this.opis = jsonObj.opis;
        this.slika = jsonObj.slika;// Mada jos uvek ne znam kako ce da cuvamo sliku

        this.brKartica = jsonObj.brKartica;
        this.brSetovaKartica = jsonObj.brSetovaKartica;
    
        //mozda bi ovo trebalo preko map ... 
        jsonObj.nizSetKartica.forEach((setKartica,i)=>{
            let pomocniSetKartica = new SetKartica();
            
            pomocniSetKartica.loadJSONtoSetKartica(setKartica);

            //potencijalno resenje ako ovo dole ne radi
            if(this.nizSetKartica[i] === undefined || this.nizSetKartica[i] === null){
                this.nizSetKartica.push(pomocniSetKartica);
            }
            else{
                this.nizSetKartica[i] = pomocniSetKartica;
            }         
                       
        });
    }
    dodajKarticu(kartica){
        return new Promise((resovle, reject) => {
            kartica.id = this.brKartica;

            const dodao = this.nizSetKartica[this.brSetovaKartica].dodajKarticu(kartica);

            if(dodao){
                this.brKartica++;

            }            
            else{
                this.brSetovaKartica++;
                this.nizSetKartica.push(new SetKartica());

                this.nizSetKartica[this.brSetovaKartica].dodajKarticu(kartica);
                this.brKartica++;
            }

            resovle(this);
        });
    }
    
    prikaziSe(tatko = document.body){        
        this.divFolder = generisiDomElement("div","card card-body","",tatko);
        
        const htmlBtn = collapseButton(`${this.oblast} <br> ${this.opis}`,`setoviKartica${this.id}`);

        let htmlExeKartice = ``;
        this.nizSetKartica.forEach((setKartica,i) => {
            htmlExeKartice += `<div id="accordion"> ` + setKartica.prikaziSe(this.divFolder,i) + `</div>`;
        });
        htmlExeKartice += ``;

        const htmlExe = collapseExample(htmlExeKartice,`setoviKartica${this.id}`);
        const htmBtnModal = btnForModal("Dodaj karticu");

        this.divFolder.innerHTML = `${htmlBtn} ${htmBtnModal} ${htmlExe}`;

        this.divTest = generisiDomElement("div","card card-body","",tatko);       
        this.divTest.id = "divTest";

        //#region Funkcionalnost dugmeta pokerni test koj generise test u divTest
        this.nizSetKartica.forEach((setKartica,index) => {
            const pomBtn = document.getElementById("PokreniTest1"+index);

            Rx.Observable.fromEvent(pomBtn,"click")
            .subscribe(event => {
                
                let divCollapse = generisiDomElement("div","collapse","",document.getElementById("divTest"));
                divCollapse.id = `collapseExamplePokreniTest1${index}`;
                let divCollapseCard = generisiDomElement("div","card card-body","",divCollapse);

                setKartica.nizKartica.forEach((kartica,i) => {
                    let pitanje = new PitanjeDefinicijaUnosPojma();

                    kartica.dodajVrstuPitanja(0,pitanje, setKartica);
                    kartica.prikaziPitanje(0,divCollapseCard);
                });
            });
        });

        //#endregion

        this.nizSetKartica.forEach((setKartica,index) => {
            let count = 0;
            let test2 = new Test(setKartica,index);
            test2.generisiTest(this.divTest,"PokreniTest2"+index, new PitanjePojamDefinicije);
            
            // Rx.Observable.fromEvent(document.getElementById("PokreniTest2"+index),"click")
            // .subscribe(event => {
                
            //     if(count % 2 == 0){
            //         console.log("Prikazi test");
            //         test2.generisiTest(this.divTest,"PokreniTest2"+index, new PitanjePojamDefinicije);
            //     }
            //     else{
            //         console.log("Obrisi test");                    
            //         test2.divTest.parentNode.removeChild(test2.divTest);
            //     }
            //     count++;
            // })

        });

    }

    prikaziSe1(parent = null){

        this.divFolder = generisiDomElement("div","card card-body",`${this.oblast} <br> ${this.opis}`,parent === null ? document.body : parent);
        this.divFolder.onclick = () => {
            if(!this.boolPrikaz){
                this.boolPrikaz = true;
                this.nizSetKartica.forEach((setKartica,i) => {
                    setKartica.prikaziSe(this.divFolder,i);
                });
            }
                
            //this.prikaziSadrzaj();
        }
    }
    prikaziSadrzaj()
    {
        this.nizSetKartica.forEach(setKar => setKar.prikaziSadrzaj());
    }
    dodajVrstuPitanja(pitanje){

    }
    dodajKarticu1(kartica){ // dodavanje kartice u set promise resovle, reject, mozda pomogne 
        const dodao = this.nizSetKartica[this.brSetovaKartica].dodajKarticu(kartica);

        if(dodao){
            this.brKartica++;
            return true;
        }            
        else{
            this.brSetovaKartica++;
            this.nizSetKartica.push(new SetKartica());
            this.dodajKarticu(kartica);
        }

    }


}