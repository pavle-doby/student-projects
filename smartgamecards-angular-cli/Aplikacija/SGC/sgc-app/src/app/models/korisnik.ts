export class Korisnik {
    slika: string;
    id_korisnik: string;
    ocena: number;
    ime: string;
    prezime: string;
    zanimanje: string;
    id_planer6: string;
    email7: string;
    id_igra8: string;
    sifra: string;
    constructor(id, ime, prezime) {
        this.id_korisnik = id;
        this.ime = ime;
        this.prezime = prezime;
    }
}