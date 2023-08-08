import { Kartica } from "./kartica.js";
import {Folder} from "./folder.js";
import { myPost } from "./myPost.js";
import { myPut } from "./myPut.js";
import { PitanjeDefinicijaUnosPojma } from "./pitanja/pitanjeDefinicijaUnosPojma.js";
//import { Pitanje } from "./pitanja/pitanje.js";

const urlKartice = "http://localhost:3000/folder/44";
const url = "http://localhost:3000/folder";
let folder = new Folder();
let kartica6 = new Kartica(69,"Ruki", "Dodji na Rusa breee!!! ", "Nema slika", "awsome", "oko 77kg");
let kartica = new Kartica(102,"Sto jedan dinara", "Sto je broj", "Nikola Tesla");


//za karticu podesi pitanje, paa ga generisi

kartica.fetchKartica(urlKartice)
.then(kart => {
    let pitanje = new PitanjeDefinicijaUnosPojma(kart);
    pitanje.generisiPitanje();
})

//myPost(url,kartica);
myPut(url,kartica);


