import { Kartica } from "./kartica.js";
import {Folder} from "./folder.js";
import { myPost } from "./myPost.js";
import { myPut } from "./myPut.js";

let kartica1 = new Kartica(45,"html", "hyperText markup lenguage");
let kartica2 = new Kartica(2,"jss", "javaScript");
let kartica3 = new Kartica(3,"ts", "typeScript");
let kartica4 = new Kartica(4,"css", "cascading style sheet");
let kartica5 = new Kartica(5, "crud", "create, read, update, delete");
let kartica6 = new Kartica(88,"Rusina", "Dodji na Rusa breee!!! ");

let folder = new Folder();
folder.id = 1;
folder.oblast = "Web programiranje";
folder.opis = "Tehnologije za upoznavanje web perogrmiranja";

Promise.all([
    folder.dodajKarticu(kartica1),
    folder.dodajKarticu(kartica2),
    folder.dodajKarticu(kartica3),
    folder.dodajKarticu(kartica4),
    folder.dodajKarticu(kartica5),
    folder.dodajKarticu(kartica6)
])
.then(
    folders => folders[folders.length-1].prikaziSadrzaj()
)
.catch( eror => {console.log("Errorrrrrr!"), console.log(eror)});

const folderSTR = JSON.stringify(folder);
const url = 'http://localhost:3000/folder';


// console.log("stringify(kartica1): ", JSON.stringify(kartica1));

myPost(url,kartica6); //Radiii :D 
myPut(url,kartica6);











