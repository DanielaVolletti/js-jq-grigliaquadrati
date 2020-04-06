// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi


$(document).ready(function(){

  // creo 64 quadrati
  for(i = 0; i < 64; i++) {
    var quadrati = $('.tablecontainer').append('<div class="square"></div>');
  }

  // creo array vuoto contenente i futuri numeri random
  var arrayNum = [];

  // faccio ciclo while fino a 15
  while(arrayNum.length < 15){

    // creo 15 numeri random da 1 a 64
    var numRandom = Math.floor(Math.random() * 64);

    // associo ad ogni quadrato un numero randomico
    var quadratoAssociato = $('div .square').get(numRandom);

    // verifico che ai quadrati sia associato un numero randomico
    console.log(quadratoAssociato);

    // aggiungo classe redWannabe a quadrato associato
    $('.tablecontainer').find(quadratoAssociato).addClass('redWannabe');

    // se il numero random non è presente nell'array, lo aggiungo
    if(arrayNum.indexOf(numRandom) === -1) {
      arrayNum.push(numRandom);
    }

  }
  console.log(arrayNum);


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
