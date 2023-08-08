import {IGenerisiTest} from './iGenerisiTest';
import {Test} from './test';

export class Igra extends IGenerisiTest {
    id:number;
    _osvojeniBrojPoena:number;
    _datum: Date;
    _nizTestova: Test[];

    constructor(id:number) {
        super();
        this.id = id;
        this._datum = new Date();
        this._osvojeniBrojPoena = 0;
        this._nizTestova = [];
    }

    dodajTest(test:Test) {
        this._nizTestova.push(test);
    }

    generisiSetPitanjaSvimKarticama() {}
    generisiTest() {}

}