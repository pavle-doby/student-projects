
export class Verifikacija {
    username: string;
    password: string;
    email: string;

    constructor(username: string , password: string,email:string = null ) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
