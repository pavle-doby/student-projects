import * as Rx from 'rxjs';
import Put, { myPut } from './myPut';
import { myPost } from './myPost';
import Korisnik from './korisnik';
import {generisiParagraf , generisiInput, generisiDomElement} from "./mydom.service";
import { resolve } from 'path';

export default class Verifikacija{

    constructor(){
        this.email;
        this.password;
        this.username;


        this.korisnik = new Korisnik();

        this.divLogin;
        this.divSignin;
        this.divLogOut;

        this.boolShowDivLogin = true;
        this.boolShowDivSignin = true;

        this.url = "http://localhost:3000/korisnici/";

        //this.divCener = generisiDomElement("center","Centar","",document.getElementById("main"));

        parent = document.querySelector("#main");
        const h2 = generisiDomElement("h2","SmartGameCards","",parent);
        const divSGC = generisiDomElement("span","badge badge-primary","Smart Game Cards",h2);

        this.generisiLoginDiv();
        this.generisiSigninDiv();

    }

    prikaziSePromise(){
        return new Promise((resolve, reject) => {
            if(!this.boolShowDivLogin && !this.boolShowDivSignin){
                resolve(true);
            }
        })
    }

    generisiLoginDiv(){

        //#region divPrijaviSe, inputEmailorUsername, inputPassword, btnLogin

        this.divLogin = generisiDomElement("div","divLogin","",document.getElementById("main"));

        const divEmailorUsername = generisiDomElement("div","divEmailorUsername","",this.divLogin);
        const pEmailorUsername = generisiParagraf("pEmailorUsername","Email ili Korisnicko ime",divEmailorUsername);
        const inputEmailorUsername = generisiInput("input","inputEmailorUsername",divEmailorUsername);


        const divPassword = generisiDomElement("div","divPassword","",this.divLogin);
        const pPassword = generisiParagraf("pPassword","Sifra",divPassword);
        const inputPassword = generisiInput("password","inputPassword",divPassword);

        const div = generisiDomElement("div","","",divPassword);
        const btnLogin = generisiDomElement("button","btnLogin","Prijavi se",divPassword);


        //#endregion

        return Rx.Observable.fromEvent(btnLogin,"click")
        .subscribe(event => {

            Promise.all([
                this.getKorisnikFromInput(inputEmailorUsername),
                this.getPasswordPromise(inputPassword)
            ])
            .then(podaci => {
                this.korisnik = podaci[0];
                this.password = podaci[1];

                if(this.korisnik.password === this.password){

                    this.divLogin.parentNode.removeChild(this.divLogin);

                    if(this.divSignin.parentNode !== null && this.divSignin.parentNode !== undefined){
                        this.divSignin.parentNode.removeChild(this.divSignin);                        
                    }      

                    this.boolShowDivLogin = false;
                    this.boolShowDivSignin = false;

                    this.korisnik.prikaziSe(true);

                }
                else{
                    alert("Lose ste uneli sifru!!!!!!!!");
                }
            })
            .catch(eror => {
                alert(eror);
                console.log(eror);
            })

        })

    }
    
    getKorisnikFromInput(inputElement){ 
        return new Promise((resolve, reject) => {
            const emailOrUsername = inputElement.value;

            if(emailOrUsername !== null && emailOrUsername !== undefined && emailOrUsername !== ""){
                if(emailOrUsername.includes("@")){
                    this.email = emailOrUsername;

                    fetch(this.url)
                    .then(response => response.json())
                    .then(nizKor => {
                        let bool = false;

                        let korisnik = nizKor.filter(korisnik => korisnik.email === this.email)
                        console.log(korisnik);
                        
                        if(korisnik.length === 1){
                            this.korisnik.loadJSONtoKorisnik(korisnik[0]);
                            resolve(this.korisnik);
                        }
                            //resolve(new Korisnik(korisnik[0].username,korisnik[0].email,korisnik[0].password,korisnik[0].ime,korisnik[0].prezime,korisnik[0].zanimanje,korisnik[0].ocena,korisnik[0].slika));                                                        
                        else
                            reject("Lose ste uneli email.");
                    });
                }
                else{ // korisnik je uneo username
                    this.username = emailOrUsername;

                    fetch(this.url + this.username)
                    .then(response => {
                        if(response.status === 404)
                            return null;
                        else
                            return response.json();
                    })
                    .then(korisnik => {
                        if(korisnik !== null ){
                            this.email = korisnik.email;
                            this.korisnik.loadJSONtoKorisnik(korisnik);
                            resolve(this.korisnik);
                           // resolve(new Korisnik(korisnik.username,korisnik.email,korisnik.password,korisnik.ime,korisnik.prezime,korisnik.zanimanje,korisnik.ocena,korisnik.slika,korisnik.folder));
                        }
                        else{
                            console.log("Uneto je lose korisnicko ime!");
                            reject("Uneto je lose korisnicko ime!");
                        }   
                    });

                }
            }
            
        })
    }

    setKorisnikFromUsername(korisnik, username){
        return fetch(this.url+username)
        .then(response => response.json())
        .then(obj => {
            this.korisnik.loadJSONtoKorisnik(obj);
            return this.korisnik;
        });
    }
    getPasswordPromise(inputEle){
        return new Promise((resolve, reject) => {
            if(inputEle.value !== undefined && inputEle.value !== null && inputEle.value !== "" ){
                resolve(inputEle.value);
            }
            else{
                reject("Niste uneli sifru");
            }
                
        })
    }

    generisiSigninDiv(){

        if(!this.boolShowDivSignin){
            console.log("Nista od SignIn");
            return;
        }

        //#region divSignin: inputEmail, inputPassword, inputPassword2, inputUsername, btnRegistrujSe

        //this.divSignin = generisiDomElement("div","divSignin","",document.body);
        this.divSignin = generisiDomElement("div","divSignin","",document.getElementById("main"));

       const pEmail = generisiParagraf("pEmail","Unestie svoj e-mail",this.divSignin);
        const inputEmail = generisiInput("input","inputEmail",this.divSignin);

        const pPassword = generisiParagraf("pPassword","Unesite svoju sifru", this.divSignin);
        const inputPassword = generisiInput("password","inputPassword",this.divSignin);

        const pPassword2 = generisiParagraf("pPassword2","Unesite svoju sifurno ponovo",this.divSignin);
        const inputPassword2 = generisiInput("password","inputPassword2",this.divSignin);

        const pUsername = generisiParagraf("pUsername","Unesite svoje korisnicko ime",this.divSignin);
        const inputUsername = generisiInput("input","inputUsername",this.divSignin);

       const pIme = generisiParagraf("pIme","Unesite svoje Ime",this.divSignin);
        const inputIme = generisiInput("input","inputIme",this.divSignin);

        const pPrezime = generisiParagraf("pPrezime","Unesite svoje Prezime",this.divSignin);
        const inputPrezime = generisiInput("input","inputPrezime",this.divSignin);

       const pZanimanje = generisiParagraf("pZanimanje","Unesite svoje Zanimanje/Hobi",this.divSignin);
       const inputZanimanje = generisiInput("input", "inputZanimanje",this.divSignin);
       
        const div = generisiDomElement("div","","",this.divSignin);
        const btnRegistrujSe = generisiDomElement("button","btnRegistrujSe","Registruj se", div);
       //#endregion


        Rx.Observable.fromEvent(inputUsername,"input")
       .debounceTime(700)
       .map(event => event.target.value)
       .subscribe(username => {
           fetch(this.url+username)
           .then(response => {
               const resp = response.status !== 404 ? "Korisnicko ime vec postoji" : "Korisnicko ime";
               pUsername.style.color = response.status !== 404 ? "red" : "black";

               pUsername.innerHTML = resp;
           })
       })

       Rx.Observable.fromEvent(inputPassword, "input")
       .debounceTime(1300)
       .map(event => event.target.value)
       .mergeMap(passwd1 => this.checkTwoPasswords(passwd1,inputPassword2))
       .subscribe(bool => {
            inputPassword.style.color = bool ? "skyblue" : "red";    
       })
       
       Rx.Observable.fromEvent(inputPassword2, "input")
       .debounceTime(1300)
       .map(event => event.target.value)
       .mergeMap(passwd2 => this.checkTwoPasswords(passwd2,inputPassword))
       .subscribe(bool => {
            inputPassword2.style.color = bool ? "skyblue" : "red";      
       })

       Rx.Observable.fromEvent(btnRegistrujSe,"click")
       .subscribe(event => {
           Promise.all([
               this.getInput(inputEmail),
               this.getInput(inputPassword),
               this.getInput(inputPassword2),
               this.getInput(inputUsername),
               this.checkUsername(inputUsername.value),//Ime, prezime, zanimanje
               this.getInput(inputIme),
               this.getInput(inputPrezime),
               this.getInput(inputZanimanje)
           ])
           .then( data => {
               const email = data[0];
               const passwd = data[1];
               const passwd2 = data[2];
               const username = data[3];
               const boolUsername = data[4];
               const ime = data[5];
               const prezime = data[6];
               const zanimanje = data[7];

               if(passwd !== passwd2){
                   alert("Sifre se ne poklapaju!");
               }
               else if(!boolUsername){
                   alert("Izaberite drugo korisnicko ime.");
               }
               else{
                console.log("Moze");
                const obj = new Korisnik(username,email,passwd,ime,prezime,zanimanje);
                myPost(this.url,obj)
                .then(bool => {
                    if(bool){
                        this.divSignin.parentNode.removeChild(this.divSignin);
                        console.log("Objekat je sacuvan: ", obj);
                        this.boolShowDivSignin = false;
                    }
                    else{
                        alert("Doslo je do tehnicke greske, pokusajte ponovo za par minuta.");
                    }
                })

               }
           })
           .catch((reason) => {
               console.log("Reason of Error in Promise: ", reason);
           })
       })
    }

    checkTwoPasswords(password1,inputPassword2) { 
        return Rx.Observable.fromEvent(inputPassword2,"input")
        .map(event => {
            const password2 = event.target.value;

            console.log("inputPassword1 password1: ", password1);
            console.log("inputPassword2 password2: ", password2);

            const bool = password1 === password2 ? true : false;
            inputPassword2.style.color = bool ? "skyblue" : "red";

            return bool;
        });
    }   

    checkUsername(username){
        const urlPom = this.url + username;
        if(username === "" || username === undefined || username === null){
            return new Promise((res,reject) => {
                console.log("Username nema vrednost!");
                reject(false);
            })
        }
        else{
            return fetch(urlPom)
            .then(response => {
                return response.status === 404;
            });
        }

    }

    getInput(inputEle){
        return new Promise((resolve, reject) => {
            const password = inputEle.value;
            if(password !== undefined && password !== null && password !== ""){
                resolve(password);
            }
        })
    }













    

    // Promis-a i Rxjs-a vezbanje,ucenje,shvatanje... 
    generisiVerifikacioniDiv1(){
        
        //#region Verfikacioni Div: inputEmail, inputPassword, inputPassword2, inputUsername, btnVerifikujSe
        const divVerifikacija = document.createElement("div");
        document.className = "divVerifikacija";
        document.body.appendChild(divVerifikacija);

        const pEmail = document.createElement("p");
        pEmail.className = "pEmail";
        pEmail.innerHTML = "Unesite svoj email:"
        divVerifikacija.appendChild(pEmail);

        const inputEmail = document.createElement("input");
        inputEmail.className = "inputEmail";
        divVerifikacija.appendChild(inputEmail);

        const pPassword = document.createElement("p");
        pPassword.className = "pPassword";
        pPassword.innerHTML = "Unesite svoju sifru:"
        divVerifikacija.appendChild(pPassword);

        const inputPassword = document.createElement("input");
        inputPassword.type = "password";
        inputPassword.className = "inputPassword";
        divVerifikacija.appendChild(inputPassword);

        const pPassword2 = document.createElement("p");
        pPassword2.className = "pPassword";
        pPassword2.innerHTML = "Unesite svoju sifru ponovo:"
        divVerifikacija.appendChild(pPassword2);

        const inputPassword2 = document.createElement("input");
        inputPassword2.type = "password";        
        inputPassword2.className = "inputPassword";
        divVerifikacija.appendChild(inputPassword2);

        const pUsername = document.createElement("p");
        pUsername.className = "pUsername";
        pUsername.innerHTML = "Unesite svoje korisnicko ime:"
        divVerifikacija.appendChild(pUsername);

        const inputUsername = document.createElement("input");
        inputUsername.className = "inputUsername";
        divVerifikacija.appendChild(inputUsername);

        const div = document.createElement("div");
        divVerifikacija.appendChild(div);

        const btnVerifikujSe = document.createElement("button");
        btnVerifikujSe.type = "button";
        btnVerifikujSe.className = "btnVerifikujSe";
        btnVerifikujSe.innerHTML = "Verifikuj se";
        div.appendChild(btnVerifikujSe);
        //#endregion


        Rx.Observable.fromEvent(inputPassword,"input")
        .debounceTime(1300)
        .map(event => event.target.value)
        .mergeMap(password1 => this.checkTwoPasswords(password1,inputPassword2))
        .mergeMap(bool => this.goToUserName(bool,inputUsername))
        .subscribe(bool => bool? console.log("Bravo Ruki, uboo si 2 reci", bool): console.log("EeeEEee Ruki, 2 reci nisi uboo", bool) );
    }
    goToUserName(bool, inputUsername){
        return Rx.Observable.fromEvent(inputUsername,"input")
        .debounceTime(1300)
        .map(username => {
            const user = username.target.value;
            console.log(user);
            return bool;
        })
    }

    generisiLoginSignin1(){ //glupa ideja...
        const divLoginSignin = document.createElement("div");
        document.body.appendChild(divLoginSignin);

        const btnLogin = document.createElement("button");
        btnLogin.type = "button";
        btnLogin.className = "btnLogin";
        btnLogin.innerHTML = "Prijavi se";
        divLoginSignin.appendChild(btnLogin);
         

        const btnSignin = document.createElement("button");
        btnSignin.type = "button";
        btnSignin.className = "btnSignin";
        btnSignin.innerHTML = "Registruj se";
        divLoginSignin.appendChild(btnSignin);
         

        const LoginObeservable = Rx.Observable.fromEvent(btnLogin, "click")
        .subscribe(event => {
            this.generisiLoginDiv();
        })
        btnLogin.onclick = () => SigninObservable.unsubscribe(); // ovo je mozda glupo...

        const SigninObservable = Rx.Observable.fromEvent(btnSignin, "click")
        .subscribe(event => {
            this.generisiSigninDiv();
        })
        btnSignin.onclick = () => SigninObservable.unsubscribe(); // ovo je mozda glupo... 

    }
}