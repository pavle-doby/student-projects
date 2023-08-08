import { Kartica } from "./kartica";
import { resolve } from "path";
import * as Rx from "rxjs";
import {generisiDomElement, generisiInput, generisiParagraf} from "./mydom.service.js";
import {basciCardWithLinks,collapseButton,collapseExample, basicCard, basicCardwithButton, btnBootstrap} from "./myBootstrap";
import { EventEmitter } from "events";



export class SetKartica //Komponent - Intefjes za Folder/Oblast
{

    //#region Konstruktor
    constructor(n = 5, brKartica = 0, nizKartica = []){
        //this.parent = parent;
        this.id; // Treba i ovo da se namesti
        this.n = n;
        this.brKartica = brKartica;

        this.nizKartica = nizKartica;

        this.boolPrikaz = false;   
        this.divSetKartica;     
    }
    //#endregion

    loadJSONtoSetKartica(jsonObj){
        this.n =jsonObj.n;
        
        jsonObj.nizKartica.forEach((kartica,i)=>{
            let pomocnaKartica = new Kartica();

            pomocnaKartica.loadJSONtoKartica(kartica);
            this.dodajKarticu(pomocnaKartica);

        });
    }


    prikaziSe(parent = null, index){
        this.id = index;
        const tatko = parent === null ? document.body : parent;        
        this.divSetKartica = generisiDomElement("div","card card-body","",tatko);

        const htmlBtn = collapseButton(`Set kartica ${index+1}`,`kartice${index}`,"btn btn-outline-primary");

        let htmlExeKartice = ``;
        this.nizKartica.forEach((kartica,i) => {
            htmlExeKartice += kartica.prikaziSe(this.divSetKartica);
        });
        const htmlExe = collapseExample(htmlExeKartice,`kartice${index}`);

        const htmlBtnTest1 = collapseButton("Pokreni test 1",`PokreniTest1${index}`,"btn btn-outline-danger");
        const htmlBtnTest2 = collapseButton("Pokreni test 2",`PokreniTest2${index}`,"btn btn-outline-danger");       
               

        this.divSetKartica.innerHTML = `${htmlBtn} ${htmlBtnTest1} ${htmlBtnTest2} ${htmlExe}`;

        return this.divSetKartica.innerHTML;
    }

    prikaziSe1(parent = null,index){
        this.divSetKartica = generisiDomElement("div","card card-body",`Set kartica <br> ${index + 1}`,parent === null ? document.body : parent);
        this.divSetKartica.onclick = () => {
            if(!this.boolPrikaz){
                this.boolPrikaz = true;
                
                this.nizKartica.forEach((kartica,i) => {
                    kartica.prikaziSe(this.divSetKartica);
                });
            }
            //this.prikaziSadrzaj();
        }
    }
    dodajKarticu(kartica){
        if(this.n > this.brKartica){

            this.nizKartica.push(kartica);
            this.brKartica++;

             return true;            
        }
        else{
            
            return false;
        }
    }
    prikaziSadrzaj(){
        this.nizKartica.forEach(kartica => kartica.prikaziSadrzaj());
    }

    dodajVrstuPitanja(pitanje){}

    // dodajVrstuPitanja(pitanje){
    //     this.nizKartica.forEach(ele => {
    //         ele.dodajVrstuPitanja(pitanje);
    //     });
    // }


    // dodajNizKartica(nizKartica: Kartica[]){
    //     if(nizKartica.length <= 5){
    //         this._nizKartica = nizKartica;
    //         this._brKartica = nizKartica.length;
    //     }
    // }
}