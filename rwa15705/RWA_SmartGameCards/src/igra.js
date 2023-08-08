import {IGenerisiTest} from "./iGenerisiTest";
import {Test}  from "./test";

export class Igra extends IGenerisiTest{

    constructor(id = 0){
        super();
        this.id = id;
        this.datum = new Date();
        this.osvojeniBrojPoena = 0;
        this.nizTestova = [];
    }

    dodajTest(test){
        this.nizTestova.push(test);
    }

    generisiSetPitanjaSvimKarticama(){}
    generisiTest(){}

}