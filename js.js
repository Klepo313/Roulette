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

var konzola = document.getElementById("upisKonzole").value;
var brojIgre = document.getElementById("idIgre");
var pozicija = document.getElementById("upisPozicija");
var ulog = document.getElementById("upisUloga");

var ispis

var kredit = document.getElementById("kreditCifra").innerHTML = 1000;
