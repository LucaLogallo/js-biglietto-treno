/* elenco variabili da utilizzare
  -NumeroChilometri = variabile chiesta in input all'utente.Tipo Float (parseFloat)
  -AnnoNascitaPasseggero = variabile chiesta in input all'utente. Tipo in (paseInt). Per calcolare l'etò bisogna fare l'anno corrente meno l'anno di nascita inserita dall'utente
  -Data = data corrente
  -AnnoCorrente = salvo l'anno corrente (non indispensabile perchè si può usare data.getFullYear())
  -EtaPasseggero = età del passeggiero calcolata con l'anno corrente meno quello di nascita
  -Tar = tariffa fissa a km
  -PrezzoNonScontato = è la variabile che contiene il calcolo del biglietto (0.21 * NumeroChilometri)
  -PrezzoFinale = contiene il PrezzoNonScontato meno lo sconto (20% per i minorenni e 40% per gli over 65) massimo due decimali per indicare i centesimi sul prezzo
*/

var NumeroChilometri = prompt("Inserire il numero di chilometri da percorrere ES. 100.00"); 
//casting e arrotondamento (con il round) chilometri inseriti dall'utente 
console.log(NumeroChilometri);

var AnnoNascitaPasseggero = prompt("Inserire l'anno di nascita");
console.log(AnnoNascitaPasseggero);

//variabili utilizzate per il calcolo dell'età
var Data = new Date;
console.log(Data);
var AnnoCorrente = Data.getFullYear();
console.log(AnnoCorrente);

var Tar = 0.21;
var PrezzoNonScontato;
var PrezzoFinale;

//calcolo PrezzoNonScontato;
NumeroChilometri = Math.round(parseFloat(NumeroChilometri));
console.log(NumeroChilometri);
PrezzoNonScontato = NumeroChilometri * 0.21;
console.log(PrezzoNonScontato);

//calcolo EtaPasseggero
var EtaPasseggero = AnnoCorrente - parseInt(AnnoNascitaPasseggero);
console.log(EtaPasseggero);

//condizioni sull'età del passeggero
if(EtaPasseggero < 18){
  PrezzoFinale = (PrezzoNonScontato * 0.80).toFixed(2);
  console.log(PrezzoFinale);
  document.getElementById("messaggio").innerHTML = 'Sei minorenne. Hai diritto ad uno sconto del 20%.<br>-Il prezzo del biglietto senza sconti:'+PrezzoNonScontato+'&euro;<br>-il prezzo del biglietto scontato e:'+PrezzoFinale+'&euro;<br>-km da percorrere:'+NumeroChilometri+'<br>-Prezzo al km:'+Tar+'&euro;';
}else if(EtaPasseggero > 65){
  PrezzoFinale = (PrezzoNonScontato * 0.60).toFixed(2);
  console.log(PrezzoFinale);
  document.getElementById("messaggio").innerHTML = 'Sei over65. Hai diritto ad uno sconto del 40%.<br>-Il prezzo del biglietto senza sconti:'+PrezzoNonScontato+'&euro;<br>-il prezzo del biglietto scontato :'+PrezzoFinale+'&euro;<br>-km da percorrere:'+NumeroChilometri+'<br>-Prezzo al km:'+Tar+'&euro;';
}else{
  PrezzoFinale = (PrezzoNonScontato).toFixed(2);
  console.log(PrezzoFinale);
  document.getElementById("messaggio").innerHTML = 'Non hai diritto ad uno sconto.<br>-Il prezzo del biglietto :'+PrezzoNonScontato+'&euro;<br>-Il prezzo del biglietto scontato :'+PrezzoFinale+'&euro;<br>-km da percorrere:'+NumeroChilometri+'<br>-Prezzo al km:'+Tar+'&euro;';
}