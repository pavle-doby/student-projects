import * as Rx from "rxjs";
import { SetKartica } from "./setKartica";
import {generisiDomElement, generisiInput, generisiParagraf} from "./mydom.service.js";
import {basciCardWithLinks,collapseButton,collapseExample, basicCard, basicCardwithButton} from "./myBootstrap";

export class Kartica
{    
//#region Konstruktor 
    constructor(
        id = null ,
        pojam = null ,
        definicija = null,
        slika = null,
        tag = null,
        tezina = null ,
        naucena = false,
        naucenaProcenti = 0,
        posecenost = 0)
    {
        this.id = id;
        this.pojam = pojam;
        this.definicija = definicija;
        this.slika= slika;
        this.tag = tag;
        this.tezina = tezina;
        this.naucena = naucena;
        this.naucenaProcenti = naucenaProcenti;
        this.posecenost = posecenost;

        this.setPitanja = [];
        this.brPitanja = 0;

        this.boolPrikaz = false;
        this.divKartica;
    }
//#endregion
   

    loadJSONtoKartica(jsonObj){
        this.id = jsonObj.id;
        this.pojam = jsonObj.pojam;
        this.definicija = jsonObj.definicija;
        this.slika= jsonObj.slika;
        this.tag = jsonObj.tag;
        this.tezina = jsonObj.tezina;
        this.naucena =jsonObj.naucena;
        this.naucenaProcenti = jsonObj.naucenaProcenti;
        this.posecenost = jsonObj.posecenost;

        this.setPitanja = []; 
    }
    mojPar(pojam, definicija){
        return this.pojam === pojam && this.definicija === definicija;
    }
    dodajVrstuPitanja(index, pitanje, setKartica){
        this.setPitanja.push(pitanje.setKarticu(this, setKartica));
        this.brPitanja++;
    }
    prikaziPitanje(index = 0, parent = document.body){        
 
        //this.setPitanja[index].prikaziPitanje(parent);
        // this.setPitanja.forEach((pitanje,i)=>{
        //     pitanje.prikaziPitanje(parent);
        // });   
        this.setPitanja[index].prikaziPitanje(parent);   
    }
    generisiSetPitanja(setKartica){

    }

    prikaziSe(parent = null,index = null){
        const tatko = parent === null ? document.body : parent;        

        const hmtlBtn = collapseButton(this.pojam,this.id,"card card-body");
        const htmlExe = collapseExample(this.definicija,this.id);
        const celoHtml = `<br> <div class="card card-body" style="border-color: #589edb;"> ${hmtlBtn} ${htmlExe} </div>`

        this.divKartica = generisiDomElement("div","card card-body",`${celoHtml}`,tatko); 

        return this.divKartica.innerHTML;
    }
    prikaziSe1(parent = null){
       // const html = `<div class="col-md-4"><div class="card mb-4 box-shadow"><img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"><div class="card-body"><p class="card-text ${this.id}"> ${this.pojam}  </p> <div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-outline-secondary view ${this.id}">View</button> <button type="button" class="btn btn-sm btn-outline-secondary edit">Edit</button> </div><small class="text-muted">9 mins</small> </div></div></div>`;
       const html = basciCardWithLinks();
       this.divKartica = document.createElement("div");
        this.divKartica.innerHTML = html;
        const tatko = parent === null ? document.body : parent;
        tatko.appendChild(this.divKartica);

       // this.divKartica = generisiDomElement("div","divKartica",`${this.pojam}`, parent === null ? document.body : parent);

       const view = document.getElementsByClassName(`btn btn-sm btn-outline-secondary view ${this.id}`);
       console.log(view);
    
       Rx.Observable.fromEvent(view,"click")
       .subscribe(event => {
           console.log("Btn Rxxxxxxxxxxx ");
           console.log(event);
            const cardText = document.getElementsByClassName(`card-text ${this.id}`);
            console.log("CadrText",cardText);
            cardText.innerHTML = `${this.pojam} <br> ${this.definicija}`;
        })
       view.onclick = function(arg1){

           const cardText = document.getElementsByClassName(`card-text ${this.id}`);
           console.log("btn View");
           cardText.innerHTML = `${this.pojam} <br> ${this.definicija}`;
       }

       const edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary edit");

        // this.divKartica.onclick = () => {
        //     if(!this.boolPrikaz){
        //         this.boolPrikaz = true;
        //         this.prikaziSadrzaj(this.divKartica);                
        //     }
        // }
    }
    prikaziSadrzaj(parent = null){ // ovo mora da se zameni
        console.log("Prikazi sadrzaj Kartica");

        const div = generisiDomElement("div","divKartica","",document.body);
        //const pPojam = generisiParagraf("pPojam",this.pojam,parent === null ? div : parent);
        const pDefinicija = generisiParagraf("pDefinicija",this.definicija,parent === null ? div : parent);
        
    }
    fetchKartica(url){
        return fetch(url) //vraca json odgovor sa servera(Promise)
        .then(response =>  response.json() ) //vraca bas bas objekat json
        .then(obj => {
            
            this.id = obj.id;
            this.pojam = obj.pojam;
            this.definicija = obj.definicija;
            this.slika= obj.slika;
            this.tag = obj.tag;
            this.tezina = obj.tezina;
            this.naucena = obj.naucena;
            this.naucenaProcenti = obj.naucenaProcenti;
            this.posecenost = obj.posecenost;
            this.setPitanja = obj.setPitanja; 

            return this; // vraca svakako Promise ili this obj, zavisi gde ga koristis...
        });

    }

}