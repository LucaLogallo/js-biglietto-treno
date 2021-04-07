/* elenco variabili da utilizzare
  -NumeroChilometri = variabile chiesta in input all'utente.Tipo int (parseInt)
  -AnnoNascitaPasseggero = variabile chiesta in input all'utente. Tipo in (paseInt). Per calcolare l'etò bisogna fare l'anno corrente meno l'anno di nascita inserita dall'utente
  -EtaPasseggero()
  -Tar = tariffa fissa a km
  -PrezzoNonScontato = è la variabile che contiene il calcolo del biglietto (0.21 * NumeroChilometri)
  -S20 = sconto del 20% 
  -S40 = sconto del 40%
  -PrezzoFinale = contiene il PrezzoNonScontato meno lo sconto (20% per i minorenni e 40% per gli over 65) massimo due decimali per indicare i centesimi sul prezzo
*/

var NumeroChilometri = prompt("Inserire il numero di chilometri da percorrere ES. 100.00"); 
//casting e arrotondamento (con il round) chilometri inseriti dall'utente 
console.log(NumeroChilometri);
var AnnoNascitaPasseggero = prompt("Inserire l'anno di nascita");
console.log(AnnoNascitaPasseggero);
var Data = Date;
console.log(Data);
var AnnoCorrente = Data.getFullYear();
console.log(AnnoCorrente);
var Tar = 0.21;
var PrezzoNonScontato;
var S20 = 20;
var s40 = 40;
var PrezzoFinale;

//calcolo PrezzoNonScontato;
NumeroChilometri = Math.round(parseFloat(NumeroChilometri));
console.log(NumeroChilometri);
PrezzoNonScontato = NumeroChilometri * 0.21;
console.log(PrezzoNonScontato);

//calcolo EtaPasseggero
var EtaPasseggero = Date.getYear() - parseInt(AnnoNascitaPasseggero);
console.log(EtaPasseggero);


