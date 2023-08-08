var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require("mysql");

const db = mysql.createConnection({
  host:'localhost',
  port:'3308',
  user:'root',
  password:'admin3308',
  database:'sgc'
});
const PORT = 3003;


const GET_CARDS_FROM_DATABASE = "GET_CARDS_FROM_DATABASE";
const GET_CARDS_FROM_DATABASE_FOR_FOLDER = "GET_CARDS_FROM_DATABASE_FOR_FOLDER";
const GET_CARDS_FROM_DATABASE_SUCCESS = "GET_CARDS_FROM_DATABASE_SUCCESS";


const GET_FOLDERS_FROM_DATABASE = "GET_FOLDERS_FROM_DATABASE";
const GET_FOLDERS_FROM_DATABASE_SUCCESS = "GET_FOLDERS_FROM_DATABASE_SUCCESS";

const CREATE_FOLDER_DATABASE = "CREATE_FOLDER_DATABASE";

const LOGIN_ACTION = "LOGIN_ACTION";
const LOGIN_ACTION_SUCCESS = "LOGIN_ACTION_SUCCESS";
const LOGIN_ACTION_FAIL = "LOGIN_ACTION_FAIL";

const GET_FOLDERS_FROM_DATABASE_USER = "GET_FOLDERS_FROM_DATABASE_USER";
const GET_FOLDERS_FROM_DATABASE_USER_SUCCESS = "GET_FOLDERS_FROM_DATABASE_USER_SUCCESS";

const CHANGE_CARD_DATABASE = "CHANGE_CARD_DATABASE";
const CHANGE_CARD_DATABASE_SUCCESS = "CHANGE_CARD_DATABASE_SUCCESS";

const CARD_ADD_DATABASE = "CARD_ADD_DATABASE";
const CARD_DELETE_DATABASE = "CARD_DELETE_DATABASE";

const FOLDER_DELETE_DATABASE = "FOLDER_DELETE_DATABASE";
const FOLDER_DELETE_DATABASE_SUCCESS = "FOLDER_DELETE_DATABASE_SUCCESS";

const SIGN_UP = "SIGN_UP";
const SIGN_UP_FAIL = "SIGN_UP_FAIL";

io.on('connection', (socket) => {
  console.log('Uspostavljena je konekcija sa soketom: ', socket.id);

  let query1 = `select * from FOLDER`;
  templateFja(socket,GET_FOLDERS_FROM_DATABASE, query1, GET_FOLDERS_FROM_DATABASE_SUCCESS);
  CreateFolderDatabase(socket);
  GetCardsFromDBforFolder(socket);
  login(socket);
  getFoldersForUser(socket);
  cardAddToDatabase(socket);
  cardChange(socket);
  caedDelete(socket);

  socket.on(SIGN_UP, (user) => {
    console.log(`${SIGN_UP} paket: `, user);
    let sqlQuery = `INSERT INTO korisnik 
    (slika,id_korisnik,ocena,ime,prezime,zanimanje,id_planer6,email7,id_igra8,sifra)
    values ('','${user.zanimanje}',0,'${user.ime}','${user.prezime}','','','','','${user.sifra}');`;
    db.query(sqlQuery,(err,result)=>{
      if (err)
        throw err;

        let sqlQuery1 = `SELECT * FROM korisnik 
        where id_korisnik = '${user.zanimanje}'
        and sifra = '${user.sifra}';`;
        db.query(sqlQuery1,(err,result)=>{
          if (err){  
            throw err;
          } else {
            let string = JSON.stringify(result);
            let jsonObj = JSON.parse(string); 
    
            if(jsonObj.length !== 1) {
              console.log("GRESKA");
              const errorObj = [ { slika: 'error',
              id_korisnik: 'error',
              ocena: -1,
              ime: 'error',
              prezime: 'error',
              zanimanje: 'error',
              id_planer6: 'error',
              email7: 'error',
              id_igra8: 'error',
              sifra: 'error' } ];
      
              io.to(socket.id).emit(SIGN_UP_FAIL, errorObj);
              console.log(`${SIGN_UP_FAIL}`);  
              // console.log(`${LOGIN_ACTION_FAIL} jsonObj:`, errorObj);  
            } else {
              io.to(socket.id).emit(LOGIN_ACTION_SUCCESS ,jsonObj);
    
              // console.log(`${LOGIN_ACTION_SUCCESS} jsonObj:`, jsonObj);
              console.log(`${LOGIN_ACTION_SUCCESS}`);  
            }
      
          }
          
        });

      
    });

  });

  socket.on(FOLDER_DELETE_DATABASE, (folder) => {
    // console.log(`${aktivaciona_akcija} paket: `, folder);

    // let sqlQuery = `delete from poseduje
    // where (poseduje.id_folder0 = '${folder.id_folder}');`;
    let sqlQuery = `delete from poseduje
    where (poseduje.id_folder0 = '${folder.id}');`;
    db.query(sqlQuery,(err,result)=>{
      if (err)
        throw err;
      // let sqlQuery = `delete from kartica
      // where (kartica.id_folder7 ='${folder.id_folder}');`;
      let sqlQuery = `delete from kartica
      where (kartica.id_folder7 ='${folder.id}');`;
      db.query(sqlQuery,(err,result)=>{
        if (err)
          throw err;

        // let sqlQuery = `delete from folder
        // where (id_folder = '${folder.id_folder}');`;
        let sqlQuery = `delete from folder
        where (id = '${folder.id}');`;
        db.query(sqlQuery,(err,result)=>{
          if (err)
            throw err;
          // let sqlQuery = `select * from folder 
          // inner join poseduje on poseduje.id_folder0 = folder.id_folder 
          // where(poseduje.id_korisnik1 = '${folder.id_korisnik}');`;
          let sqlQuery = `select * from folder 
          inner join poseduje on poseduje.id_folder0 = folder.id 
          where(poseduje.id_korisnik1 = '${folder.id_korisnik}');`;
          db.query(sqlQuery,(err,result)=>{
            if (err)
              throw err;
            
            let string = JSON.stringify(result);  
            let jsonObj = JSON.parse(string);

            io.to(socket.id).emit(FOLDER_DELETE_DATABASE_SUCCESS ,jsonObj);
            console.log(`${FOLDER_DELETE_DATABASE_SUCCESS} jsonObj:`);
      
          });

    
        });

  
      });

    });

  });



});

function templateFja(socket, aktivaciona_akcija, query, zavrsna_akcija ) {
  socket.on(aktivaciona_akcija, (folder) => {
    // console.log(`${aktivaciona_akcija} paket: `, folder);

    let sqlQuery = query;
    db.query(sqlQuery,(err,result)=>{
      if (err)
        throw err;

      let string = JSON.stringify(result);
      let jsonObj = JSON.parse(string);

      io.to(socket.id).emit(zavrsna_akcija ,jsonObj);
      // console.log(`${zavrsna_akcija} jsonObj:`, jsonObj);
      console.log(`${zavrsna_akcija} jsonObj:`);

      
    });

  });

}
function caedDelete(socket) {
  socket.on(CARD_DELETE_DATABASE, (card) => {
    // console.log(`${CARD_DELETE_DATABASE} paket: `, card);
    let sqlQuery = `delete from kartica 
    where (id = '${card.id}');`;
    db.query(sqlQuery,(err,result)=>{
      if (err)
        throw err;

      let sqlQuery = `select * from kartica
      where id_folder7 = '${card.id_folder7}';`;
      db.query(sqlQuery,(err,result)=>{
        if (err)
          throw err;
  
        let string = JSON.stringify(result);
        let jsonObj = JSON.parse(string);
  
        io.to(socket.id).emit(CHANGE_CARD_DATABASE_SUCCESS ,jsonObj);
        // console.log(`${zavrsna_akcija} jsonObj:`, jsonObj);
        console.log(`${CHANGE_CARD_DATABASE_SUCCESS} jsonObj:`);
      });
      
    });

  });
}

function cardChange(socket) {
  socket.on(CHANGE_CARD_DATABASE, (card) => {
    // console.log(`${aktivaciona_akcija} paket: `, card);

    let sqlQuery = `update kartica
    set pojam = '${card.pojam}', definicija = '${card.definicija}'   
    where (kartica.id = '${card.id}'); `;
    db.query(sqlQuery,(err,result)=>{
      if (err)
        throw err;

      let sqlQuery = `select * from kartica
      where id_folder7 = '${card.id_folder7}';`;
      db.query(sqlQuery,(err,result)=>{
        if (err)
          throw err;
  
        let string = JSON.stringify(result);
        let jsonObj = JSON.parse(string);
  
        io.to(socket.id).emit(CHANGE_CARD_DATABASE_SUCCESS ,jsonObj);
        // console.log(`${zavrsna_akcija} jsonObj:`, jsonObj);
        console.log(`${CHANGE_CARD_DATABASE_SUCCESS} jsonObj:`);
  
        
      });
      
    });
  });
}

function cardAddToDatabase (socket) {
  socket.on(CARD_ADD_DATABASE, (card) => {
    console.log(`${CARD_ADD_DATABASE} paket: `, card);
    let idCard = "id"+ parseInt(Math.random()*10000);          
    let sqlQuery = `INSERT INTO kartica 
    (definicija,pojam,slika,id,naucena,tezina,posecenost,id_folder7,id_test8)
    VALUES ('${card.definicija}','${card.pojam}','','${idCard}',0,0,0,'${card.id_folder7}','');`;
    db.query(sqlQuery,(err,result)=>{
      if (err)
        throw err;

      let sqlQuery = `select * from kartica
      where id_folder7 = '${card.id_folder7}';`;
      db.query(sqlQuery,(err,result)=>{
        if (err)  
          throw err;
  
        let string = JSON.stringify(result);
        let jsonObj = JSON.parse(string);
  
        io.to(socket.id).emit(CHANGE_CARD_DATABASE_SUCCESS ,jsonObj);
        // console.log(`${zavrsna_akcija} jsonObj:`, jsonObj);
        console.log(`${CHANGE_CARD_DATABASE_SUCCESS} jsonObj:`);
  
        
      });
      
    });
  });

}
function getFoldersForUser(socket) {
  socket.on(GET_FOLDERS_FROM_DATABASE_USER, (user) => {
    // console.log(`${GET_FOLDERS_FROM_DATABASE_USER} paket: `, folder);

    // let sqlQuery = `select * from folder 
    // inner join poseduje on poseduje.id_folder0 = folder.id_folder 
    // where(poseduje.id_korisnik1 = '${user.id_korisnik}');`;
    let sqlQuery = `select * from folder 
    inner join poseduje on poseduje.id_folder0 = folder.id
    where(poseduje.id_korisnik1 = '${user.id_korisnik}');`;
    db.query(sqlQuery,(err,result)=>{
      if (err)
        throw err;

      let string = JSON.stringify(result);
      let jsonObj = JSON.parse(string);

      io.to(socket.id).emit(GET_FOLDERS_FROM_DATABASE_USER_SUCCESS ,jsonObj);
      // console.log(`${GET_FOLDERS_FROM_DATABASE_USER_SUCCESS} jsonObj:`, jsonObj);
      console.log(`${GET_FOLDERS_FROM_DATABASE_USER_SUCCESS} jsonObj:`);
    });
  });
} 

function login(socket) {
  socket.on(LOGIN_ACTION, (login) => {
    console.log(`${LOGIN_ACTION} paket: `, login);

    let sqlQuery = `SELECT * FROM sgc.korisnik 
    where id_korisnik = '${login.username}'
    and sifra = '${login.password}';`;

    db.query(sqlQuery,(err,result)=>{
      if (err){  

      } else {
        let string = JSON.stringify(result);
        let jsonObj = JSON.parse(string); 

        if(jsonObj.length !== 1) {
          console.log("GRESKA");
          let errorObj = [ { slika: 'error',
          id_korisnik: 'error',
          ocena: -1,
          ime: 'error',
          prezime: 'error',
          zanimanje: 'error',
          id_planer6: 'error',
          email7: 'error',
          id_igra8: 'error',
          sifra: 'error' } ];
  
          io.to(socket.id).emit(LOGIN_ACTION_FAIL, errorObj);
          console.log(`${LOGIN_ACTION_FAIL}`);  
          // console.log(`${LOGIN_ACTION_FAIL} jsonObj:`, errorObj);  
        } else {
          io.to(socket.id).emit(LOGIN_ACTION_SUCCESS ,jsonObj);

          // console.log(`${LOGIN_ACTION_SUCCESS} jsonObj:`, jsonObj);
          console.log(`${LOGIN_ACTION_SUCCESS}`);  
        }
  
      }
      
    });
  });
}

function GetCardsFromDBforFolder(socket) {
  socket.on(GET_CARDS_FROM_DATABASE_FOR_FOLDER, (id_folder) => {
    // console.log(`${GET_CARDS_FROM_DATABASE_FOR_FOLDER} paket: `, id_folder);

    let sqlQuery = `select * from kartica where(id_folder7='${id_folder}');`;
    db.query(sqlQuery,(err,result)=>{
      if (err)
        throw err;

      let string = JSON.stringify(result);
      let jsonObj = JSON.parse(string);

      io.to(socket.id).emit(GET_CARDS_FROM_DATABASE_SUCCESS ,jsonObj);
      // console.log(`${GET_CARDS_FROM_DATABASE_SUCCESS} jsonObj:`, jsonObj);
      console.log("GET_CARDS_FROM_DATABASE_FOR_FOLDER");
    });
  });
}
function CreateFolderDatabase(socket) {
  socket.on(CREATE_FOLDER_DATABASE, (folder) => {
    console.log(`${CREATE_FOLDER_DATABASE} paket: `, folder);

    let radnId = "id"+ parseInt(Math.random()*10000);
    // let query = ` INSERT INTO folder 
    // (ocena,ime,opis,slika,id_folder,tag,id_igra6,id_korisnik,ukupan_br_poena)
    // values
    // (0,'${folder.ime}','${folder.opis}','slika','${radnId}','${folder.tag}','','${folder.id}',0); `;
    let query = ` INSERT INTO folder 
    (ocena,ime,opis,slika,id,tag,id_igra6,id_korisnik,ukupan_br_poena)
    values
    (0,'${folder.ime}','${folder.opis}','slika','${radnId}','${folder.tag}','','${folder.id}',0); `;

    let sqlQuery = query
    console.log("Query: " + sqlQuery);
    db.query(sqlQuery,(err,result)=>{
      if (err)
        throw err;

      let query1 = ` INSERT INTO poseduje
      (id_folder0,id_korisnik1)
      values('${radnId}','${folder.id}'); `
      console.log(query1);
      db.query(query1, (err, result) => {
        if(err)
          throw err;

        let count = 0;        
        folder.nizKartica.forEach((card, i) => {
          let idCard = "id"+ parseInt(Math.random()*10000);          
          let query = `INSERT INTO kartica 
          (definicija,pojam,slika,id,naucena,tezina,posecenost,id_folder7,id_test8)
          VALUES ('${card.definicija}','${card.pojam}','','${idCard}',0,0,0,'${radnId}','');`;
          db.query(query,(err,result) => {
            if(err)
              throw err;
            console.log("Card Add:" + i);   
            count++;
          })
        })
        if(count === folder.nizKartica.length)
          console.log("All cards are added");
        
        let query = `select * from FOLDER`;
        db.query(query,(err,result)=>{
          if (err)
            throw err;
    
          let string = JSON.stringify(result);
          let jsonObj = JSON.parse(string);
    
          io.to(socket.id).emit(GET_FOLDERS_FROM_DATABASE_SUCCESS ,jsonObj);
          // console.log(`${GET_FOLDERS_FROM_DATABASE_SUCCESS} jsonObj:`, jsonObj);
          console.log(`${GET_FOLDERS_FROM_DATABASE_SUCCESS} jsonObj:`);
        });
      }) 

    });
  });
}

http.listen(PORT, function () {
  console.log(`'listening on PORT: ${PORT} ...'`);
});