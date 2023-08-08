import {Folder} from "./folder";
import { SetKartica } from "./setKartica";
import { Kartica } from "./kartica";

import Put, { myPut } from './myPut';
import { myPost } from './myPost';

import { WSAEINVALIDPROVIDER } from "constants";

import * as Rx from 'rxjs';
import {generisiDomElement, generisiInput, generisiParagraf} from "./mydom.service.js";

export default class Korisnik{

    //moram ovde da dodam folder
    constructor(username, email, password, ime=null, prezime=null, zanimanje="", ocena=null, slika=null , folder=null){
        //Ovo mora da ima: 
        this.id = username;
        this.email = email;
        this.password = password;

        this.ime = ime;
        this.prezime = prezime;
        this.zanimanje = zanimanje;
        this.ocena = ocena;
        this.slika = slika === null ? new Image(): slika;
 
        this.folder = folder === null ? new Folder() : folder;
        this.folderID;

        this.url = "http://localhost:3000/korisnici/"; // malo je lose ovo hard-kodirati....
        

    }

    loadJSONtoKorisnik(jsonObj){
        this.id = jsonObj.id;
        this.email = jsonObj.email;
        this.password = jsonObj.password;

        this.ime = jsonObj.ime;
        this.prezime = jsonObj.prezime;
        this.zanimanje = jsonObj.zanimanje;
        this.ocena = jsonObj.ocena;
        this.slika = jsonObj.slika === null || jsonObj.slika === undefined ? new Image(): jsonObj.slika;
        
        
        this.folder = new Folder();
        this.folder.loadJSONtoFolder(jsonObj.folder);
        this.folderID = jsonObj.folder.id;

        this.divKorisnik;
        this.divKorisnikFolder;
        this.divParagrafLogOut;
    }

    prikaziSe(bool){
        if(bool){

             parent = document.querySelector("#main");
            
            const h4 = generisiDomElement("h4","ImePrezime","",parent);
            this.divKorisnik  = generisiDomElement("span","badge badge-danger","",h4);           

            
            const pKorisnikImePrezime = generisiParagraf("pKorisnikImePrezime",`${this.ime} ${this.prezime} <br><br> ${this.zanimanje} `,this.divKorisnik);

            this.divKorisnikFolder = generisiDomElement("div","divKorisnikFolder","",parent);
            
            this.folder.prikaziSe(this.divKorisnikFolder);

            const btnDodaj = document.querySelector("#dodaj");

            Rx.Observable.fromEvent(btnDodaj,"click")
            .subscribe(event => {
                let inputPojam = document.querySelector("#pojam");
                let inputDefinicija = document.querySelector("#definicija");
    
                
                this.folder.dodajKarticu(new Kartica(1,inputPojam.value,inputDefinicija.value));
                console.log(this);
    
                
                inputPojam.value = "";
                inputDefinicija.value = "";
                this.folder.nizSetKartica.forEach((setKartica,index) => {
                    setKartica.nizKartica.forEach((kartica,i)=>{
                        kartica.setPitanja = [];
                    });                    
                });
    
                
                this.divKorisnikFolder.parentNode.removeChild(this.divKorisnikFolder);
                console.log("Obrise ga:", this.divKorisnikFolder);
                this.divKorisnikFolder = generisiDomElement("div","divKorisnikFolder","",parent);
                console.log("I sad ga opet prikaze:",this.divKorisnikFolder);
                this.folder.prikaziSe(this.divKorisnikFolder);

                myPut(this.url,this);
                
            });


        }
        else{

        }
    }

}