$(document).ready(function() {

var firstCard = 0; 
var secondCard = 0;
var matched = 0;
  
$(".card").click( function () {
  // check if card is already matched 
  if($(this).hasClass("matched")){
  } else if ($(this).hasClass("selected")){
    //card is already selected
  } else {
    
  // show selected card
  $(this).toggleClass("cardFace"); 
  
  //set card value
  if(firstCard === 0){
    firstCard = $(this).text();
    $(this).toggleClass("selected");
  } else {
    secondCard = $(this).text();
    $(this).toggleClass("selected");
  }  
  
// check if cards match  
  if(firstCard !== 0 && secondCard !== 0){
    
    //cards match
    if(firstCard === secondCard){
      //reset cards
      firstCard = 0;
      secondCard = 0;
      matched++;
      if(matched === 6){
        $("#modalWin").modal('show');
      } 
      // set as matched cards
      $(".selected").toggleClass("matched cardFace selected");             
    } else if(firstCard !== secondCard){
      
      // cards don't match
      // reset cards
      firstCard = 0;
      secondCard = 0;
      //reset selected card view
      $(".selected").animate({
        borderWidth: "3px"
      }, 1500, function (){
        $(".selected").toggleClass("cardFace selected");
      });
    }
  } 
}
});  

  //rest all card views and values
  var newGame = function(){
    $(".card").removeClass("cardFace selected matched");
    firstCard = 0;
    secondCard = 0;
    matched = 0;
  };
  
  var hintShowAll = function () {
    $(".card").addClass("cardFace");
    firstCard = 0;
    secondCard = 0;
    matched = 0;
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
