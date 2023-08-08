import {Pitanje} from "./pitanje";
import {Kartica} from "../kartica";
import { Folder } from "../folder";

export class PitanjePunoPojmova extends Pitanje {

    folder: Folder;
    constructor(folder: Folder) {
        super(null, folder);
    }

    generisiPitanje(kartica:Kartica) {}
    proveriOdgovor(odgovor:string) {}

}