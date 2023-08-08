import { IGenerisiTest } from './iGenerisiTest';

export class Test extends IGenerisiTest {
    id_test:string;
    id_korisnik: string;
    id_igra: string;
    odradjenost:number;
    osvojen_broj_poena:number;
    datum: Date;

    constructor(id_test: string,id_korisnik: string) {
        super();
        this.id_test = id_test;
        this.id_korisnik = id_korisnik;
        this.osvojen_broj_poena = 0;
        this.id_igra = '';
        this.odradjenost = 0;
        this.datum = new Date();
    }

    generisiSetPitanjaSvimKarticama() {}
    generisiTest() {}

}