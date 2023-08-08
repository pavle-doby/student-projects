import { Kartica } from "../kartica";

//ova klasa bi trebala da imitirra interfejs
export class Pitanje{

    constructor(kartica = null)
    {
        this.kartica = kartica;
        this.tajmer;
        this.divPitanje;
        this.divProgressBar;
        this.id;
    }
    getRandomNum(){

    }
    setKarticu(kartica, setKartica = null){
        this.kartica = kartica;
        

        if(setKartica !== null){
            this.setKartica = setKartica;
        }
        return this;
    }
    prikaziPitanje(parent = document.body){}

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