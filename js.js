/*
const request = new XMLHttpRequest(); 
//request.open(`GET`,`https://jsonplaceholder.typicode.com/users`);
request.open('GET',`http://192.168.5.21:3000/konzola`);
request.send();
request.onload = ()=> {
  console.log(request);
  if(request.status === 200){
    console.log(JSON.parse(request.response));
    //document.getElementById('paragraph').innerHTML = JSON.parse(request.response);
  } else {
    console.log(request);
    console.log(`error ${request.status}`);
  }
}
*/
var kredit = document.getElementById("kreditCifra").innerHTML = 1000;

var konzola = document.getElementById("upisKonzole");
var brojIgre = document.getElementById("idIgre");
var pozicija = document.getElementById("upisPozicija");
var ulog = document.getElementById("upisUloga");

var ispisUloga = document.getElementById("ispisUloga");
var ispisPozicija = document.getElementById("ispisPozicija");
var izvuceniBroj = document.getElementById("rezultat");
var dobitak = document.getElementById("dobitak") ;

const uloziBtn = document.getElementById("sibniBtn");

function get_random_number(min, max) {
  var randomBroj = Math.floor(Math.random() * (max - min + 1)) + min;
  izvuceniBroj.innerHTML = randomBroj;
}

uloziBtn.addEventListener("click", function(){

  get_random_number(0, 36);

});
