// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi


$(document).ready(function(){

  // creo 64 quadrati
  for(i = 0; i < 64; i++) {
    var quadrati = $('.tablecontainer').append('<div class="square"></div>');
  }

  // creazione 15 numeri randomici
  for(j = 0; j < 15; j++) {
    var numRandom = Math.floor(Math.random() * (64 - 1) + 1);
    console.log(numRandom);
  }

  // associo ad ogni quadrato un numero randomico





  // variabile per tenere il punteggio dei Verdi VS Rossi
  var redPoint = 0, greenPoint = 0;

  // cosa accade quando clicco sul quadrato
  $('.square').click(
    function () {
      if($(this).hasClass('active')){
        console.log("OH! l'hai già cliccato!");
      } else if($(this).hasClass('redWannabe')){
        $(this).css('background', 'red');
        redPoint++;
        $(this).addClass('active');
        console.log("punteggio rosso: " + redPoint);
        $('.prossa').html("punteggio rosso: " + redPoint);
      } else {
        $(this).css('background', 'green');
        greenPoint++;
        $(this).addClass('active');
        console.log("punteggio verde: " + greenPoint);
        $('.pverde').html("punteggio verde: " + greenPoint);
      }
    }
  );



});
