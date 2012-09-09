$(document).ready(function() {

var firstCard = 0; 
var secondCard = 0;
var matched = 0;

$(".card").click( function () {
  // check if card is already matched 
  if($(this).hasClass("matched")){
  } else if($(this).hasClass("selected")){
  } else if(secondCard !== 0){
  } else {
  // show card
  $(this).toggleClass("cardFace selected"); 
    //set card value
    if(firstCard === 0){
    firstCard = $(this).text();
    secondCard = 0;
    } else if(secondCard === 0) {
    secondCard = $(this).text();
    checkMatch(); 
    }
  }
});  



var checkMatch = function(){
//cards match
    if(firstCard === secondCard){
      // cards match
      matched++;
      checkWin();
      // set as matched cards
      $(".selected").toggleClass("matched cardFace");
      $(".card").removeClass("selected");
      $('.top-right').notify({
        message: { text: 'Good Job!' },
        type: 'success'
      }).show();
      firstCard = 0;
      secondCard = 0;
    } else if(firstCard !== secondCard){
      // cards don't match
      $('.top-right').notify({
        message: { text: 'Sorry, try again!' },
        type: 'error'
      }).show();
      //reset card view
      $(".selected").animate({
        borderWidth: "3px"
      }, 2000, function (){
        $(".card").removeClass("cardFace selected");
        firstCard = 0;
        secondCard = 0;
      });
    }
};

var checkWin = function(){
  if(matched === 6){
    $("#modalWin").modal('show');
  } 
};
  //rest all card views and values
  var newGame = function(){
    $(".card").removeClass("cardFace matched");
    firstCard = 0;
    secondCard = 0;
    matched = 0;
  };
 
  var hintShowAll = function () {
    $(".card").addClass("cardFace matched");
  };
  
  // New Game handler
  $("#newGame").click(function () {
    newGame();
  });
  
  // hintShowAll handler
  $("#hintShowAll").click(function () {
    hintShowAll();
  });

}); //end doc.ready
