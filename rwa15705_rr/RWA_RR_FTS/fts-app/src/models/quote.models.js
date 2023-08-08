
export class Quote{

    constructor(id= -1, text="", type = ""){
        this.id = id;
        this.text = text;
        this.type = type;
        this.likes = 0;
        this.comments = new Array();
    }
}