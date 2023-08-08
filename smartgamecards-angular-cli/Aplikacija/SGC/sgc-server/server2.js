var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require("mysql");

const db=mysql.createConnection({
  host:'localhost',
  port:'3308',
  user:'root',
  password:'123456',
  database:'ridealong'

});

io.on('connection', function (socket){
  console.log("A user connected with id ",socket.id);
  
  socket.on('test', function (msg) {
    console.log("Primio sam poruku",msg);
   
  });
  socket.on('register', function (msg) {
    console.log("Primio sam register",msg);
    let sql='INSERT INTO korisnik(username,password,email) VALUES('+ '"'+msg.username+'",'+ '"'+msg.password+'",'+'"'+msg.email+'");';
    //let sql='Select * from korisnik'; ovo je lepo uradi
    console.log(sql);
    
    db.query(sql,(err,result)=>{
    if (err)
    throw err;
    console.log(result);

     });
    });

    socket.on('log_in', function (msg) {
      console.log("Primio sam login",msg);
      
    
     let sql='SELECT * FROM korisnik WHERE username=' +mysql.escape(msg.username)+'AND password='+mysql.escape(msg.password);

       db.query(sql,(err,result)=>{
       if (err)
       throw err;
       console.log(result);
        if(result.length>0)
          {
            let string=JSON.stringify(result);
            let json=JSON.parse(string);
            console.log(json);
            let tmp={
              rezultat:"Uspesno",
              vrednost:"1",
              objekat:{
                username:json[0].username,
                password:json[0].password,
                id:json[0].id
              }
            }
            console.log("tmp je",tmp);
            io.to(socket.id).emit("login_feedback",tmp);            
          }
        else
        {
          let tmp={
            rezultat:"Neuspesno",
            vrednost:"0"
          }
          console.log("tmp je",tmp);
          io.to(socket.id).emit("login_feedback",tmp); 
        }
       });
      });

      socket.on('create_quick_ride', function (msg) {
        console.log("U create quick ride sam",msg);
        let sql='INSERT INTO koordinate VALUES('+mysql.escape(msg.idkor)+','+mysql.escape(msg.slat)+','+mysql.escape(msg.slng)+','+mysql.escape(msg.dlat)+','+mysql.escape(msg.dlng)+','+mysql.escape(msg.sockid)+','+mysql.escape(msg.user)+')';
        console.log("Upit za upis createquickride",sql);
    
        db.query(sql,(err,result)=>{
          if (err)
          throw err;
          console.log("Rezultat dodavanja je:",result);
      
        });

        let sqltwo='SELECT * FROM koordinate';

        db.query(sqltwo,(err,result)=>{
          if(err)
          throw err;
          
          let string=JSON.stringify(result);
          let json=JSON.parse(string);
          json.forEach(element => {
            if(element.sock_id!==socket.id)
            {
              io.to(element.sock_id).emit("request_quick_rides_list_feedback",json);
            }
          });

        });


        });
        socket.on('request_quick_rides_list', function (msg) {
          console.log("U request quickride list sam",msg);
          let sql="SELECT * FROM koordinate";
          

          db.query(sql,(err,result)=>{
            if (err)
            throw err;
            let string=JSON.stringify(result);
            let json=JSON.parse(string);
            console.log("Ovo mi je lista quickrides",json);
            io.to(socket.id).emit("request_quick_rides_list_feedback",json);          
          });
          })
          
          socket.on('request_chat', function (msg) {
            console.log("U request chatu sam,primio sam: ",msg);
             let sql='SELECT * FROM koordinate WHERE sock_id='+mysql.escape(msg.mysockid);
            
  
             db.query(sql,(err,result)=>{
               if (err)
               throw err;
               let string=JSON.stringify(result);
               let json=JSON.parse(string);
              
               let tmp={
                 username:json[0].username,
                 sockid:json[0].sock_id
               }
               console.log("Saljem",msg.sockidchat,tmp);
               io.to(msg.sockidchat).emit("chat_requested",tmp);          
             });
            })
            socket.on('chat_accepted',function(msg){
               console.log("U chat acceptedu sam primio",msg); 
               let tmp={
                 username:msg.otherusername,
                 socket:msg.from
               }
              console.log("tmp je",tmp);
              io.to(msg.to).emit("chat_accepted_feedback",tmp);   
            })
            
            socket.on('send_message',function(msg){
              console.log("U send message sam primio",msg); 
              let tmp={
                message:msg.mess
              }
             console.log("tmp je",tmp);
             io.to(msg.to).emit("message_received",tmp);   
           })

    });

http.listen(3002, function () {
  console.log('listening on *:3002');
});