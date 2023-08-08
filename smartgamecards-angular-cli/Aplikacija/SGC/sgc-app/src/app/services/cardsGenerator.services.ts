import { Kartica } from '../models/kartica';

export function generateCards(n: number = 10) {
    let nizKartica: Kartica[] = [];
    for(let i=0; i < n; i++) {
        let pojam = 'pojam'+i;
        let definicija = 'definicija'+i;
        let slika = 'Nema slike';
        let tag = 'test_generator';
        let tezina = 1;
        let naucena = 0;
        let naucenaProcenti = 0;
        let posecenost = 0;
        nizKartica.push(new Kartica(i,pojam, definicija, slika, tag, tezina, naucena, naucenaProcenti, posecenost));
    }
    return nizKartica;
}