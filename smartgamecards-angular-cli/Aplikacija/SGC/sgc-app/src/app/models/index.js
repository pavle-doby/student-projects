import { Kartica } from "./kartica.ts";
// import {Folder} from "./folder";


let kartica1 = new Kartica(1,"html", "hyperText markup lenguage");
let kartica2 = new Kartica(2,"js", "javaScript");
let kartica3 = new Kartica(3,"ts", "typeScript");
let kartica4 = new Kartica(4,"css", "cascading style sheet");
let kartica5 = new Kartica(5, "crud", "create, read, update, delete");
let kartica6 = new Kartica(6,"Ruki", "Je kralj");

let folder = new Folder(1,"Wep programiranje", "HTML, CSS, JS");

folder.dodajKarticu(kartica1);
folder.dodajKarticu(kartica2);
folder.dodajKarticu(kartica3);
folder.dodajKarticu(kartica4);
folder.dodajKarticu(kartica5);
folder.dodajKarticu(kartica6);

folder.prikaziSveKartice();










