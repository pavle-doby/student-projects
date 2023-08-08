import { Quote } from "./quote.models";

export class myImage extends Quote{

    constructor(id= -1, text="", type = "", src = "", alt="Slika nije pronadjena."){
        super(id,text,type);
        this.src = src;
        this.alt = alt;
    }
}