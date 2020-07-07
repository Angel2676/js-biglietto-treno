var destinazione = parseInt (prompt ("quanti km vuoi percorrere "));
var eta = parseInt (prompt ("inserisci l'\ eta "));
var fullPrice = destinazione * 0.21;
var pricePromoUnder = fullPrice * 0.8;
var pricePromoOver = fullPrice * 0.6;
if ((eta > 18 ) && (eta < 65)) {
document .getElementById('prezzo') .innerHTML = "Il prezzo finale è €" + fullPrice;
}
else if (eta < 18) {
document .getElementById('prezzo') .innerHTML = "Il prezzo del tuo ticket è €" + pricePromoUnder;
}
else if (eta > 65 ) {
document .getElementById('prezzo') .innerHTML = "Il prezzo promo è €" + pricePromoOver;
}
