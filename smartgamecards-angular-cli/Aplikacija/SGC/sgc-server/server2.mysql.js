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

const GET_CARDS_FROM_DATABASE = "GET_CARDS_FROM_DATABASE";
const GET_CARDS_FROM_DATABASE_FOR_FOLDER = "GET_CARDS_FROM_DATABASE_FOR_FOLDER";
const GET_CARDS_FROM_DATABASE_SUCCESS = "GET_CARDS_FROM_DATABASE_SUCCESS";


const GET_FOLDERS_FROM_DATABASE = "GET_FOLDERS_FROM_DATABASE";
const GET_FOLDERS_FROM_DATABASE_SUCCESS = "GET_FOLDERS_FROM_DATABASE_SUCCESS";

const CREATE_FOLDER_DATABASE = "CREATE_FOLDER_DATABASE";

const LOGIN_ACTION = "LOGIN_ACTION";

io.on('connection', (socket) => {
  console.log('Uspostavljena je konekcija sa soketom: ', socket.id);

  let query1 = `select * from FOLDER`;
  templateFja(socket,GET_FOLDERS_FROM_DATABASE, query1, GET_FOLDERS_FROM_DATABASE_SUCCESS);
  CreateFolderDatabase(socket);
  
  // templateFja(socket, GET_CARDS_FROM_DATABASE_FOR_FOLDER, query2, GET_CARDS_FROM_DATABASE_SUCCESS);

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


function CreateFolderDatabase(socket) {
  socket.on(CREATE_FOLDER_DATABASE, (folder) => {
    console.log(`${CREATE_FOLDER_DATABASE} paket: `, folder);

    let radnId = "id"+ parseInt(Math.random()*10000);
    let query = ` INSERT INTO folder 
    (ocena,ime,opis,slika,id_folder,tag,id_igra6,id_korisnik,ukupan_br_poena)
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

const port = 3004;
http.listen(port, function () {
  console.log(`Listening on PORT: ${port}`);
});