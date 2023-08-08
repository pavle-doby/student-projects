import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {
//pitanja
//1.definicija-pojmovi
//2.pojam-definicije
//3.true-false
//4.povezi pojmove i definicije
//5.definicija,unos pojma
//6.oblast-sto vise pojmova(10)
//7.pojam,unos definicije
  constructor() { }

  ngOnInit() {
    var tekst=[
      "0%   /   1.pitanje  / 10p",
      "10%   /   2.pitanje  / 10p",
      "20%   /   3.pitanje  / 10p",
      "40%   /   4.pitanje  / 10p",
      "60%   /   5.pitanje  / 20p",
      "80%   /   6.pitanje  / 20p",
      "100%   /   7.pitanje  / 20p",
      ];
      var pomocna=0;
      var sirinapom=1;
      var jos=1;
document.getElementById("start").onclick=function(){
document.getElementById("start").style.visibility="hidden";
if(jos===1){
document.getElementById("prvo").hidden=false;
}
else{
    document.getElementById("prvo").hidden=true;
}
document.getElementById("divprogress").hidden=false;
document.getElementById("progress").innerHTML=tekst[pomocna];
var uzmi=document.getElementById("progress");

if(uzmi.style.width==="10%" && sirinapom===0 ){
    uzmi.style.width="20%";
    document.getElementById("prvo").hidden=true;
    document.getElementById("drugo").hidden=false;
    jos=0;
}
else if(uzmi.style.width==="20%")
{
    uzmi.style.width="30%";
    document.getElementById("drugo").hidden=true;
    document.getElementById("trece").hidden=false;
}
else if(uzmi.style.width==="30%")
{
    uzmi.style.width="40%";
    document.getElementById("trece").hidden=true;
    document.getElementById("cetvrto").hidden=false;
}
else if(uzmi.style.width==="40%")
{
    uzmi.style.width="60%";
    document.getElementById("cetvrto").hidden=true;
    document.getElementById("peto").hidden=false;
}
else if(uzmi.style.width==="60%")
{
    uzmi.style.width="80%";
    document.getElementById("peto").hidden=true;
    document.getElementById("sesto").hidden=false;

}
else if(uzmi.style.width==="80%")
{
    uzmi.style.width="100%";
    document.getElementById("sesto").hidden=true;
    document.getElementById("sedmo").hidden=false;
}

var count = 5;
var timer = setInterval(function() {
var tajmer=document.createElement("label");
tajmer.id="tajmer";
tajmer.innerHTML="Vreme: "+count;
tajmer.style.fontSize="40px";
tajmer.style.cssFloat="right";
var pom=document.getElementById("smestiTajmer");
while(pom.firstChild)
pom.removeChild(pom.firstChild);

pom.appendChild(tajmer);
document.getElementById('tajmer').scrollIntoView();
count--;
if(count === -2 ) {
    if(pomocna===7){
stopInterval()
document.getElementById("sedmo").hidden=true;
alert("Gotov kviz hehe");
    }else 
    {
        sirinapom=0;
        stopInterval();
        //setTimeout(function(){$("#ModalTimer").modal('hide')},2000);
        //setTimeout(function(){ $("#start").click(); }, 3000);
    }
}
}, 1000);

var stopInterval = function() {
var pom=document.getElementById("smestiTajmer");
while(pom.firstChild)
pom.removeChild(pom.firstChild);
var tajmer=document.createElement("label");
tajmer.id="tajmer";
tajmer.innerHTML="Vreme je isteklo";
//$("#ModalTimer").modal('show');
clearInterval(timer);

}
pomocna++;
      }

  }

}
