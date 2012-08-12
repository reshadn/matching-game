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
  } else if(secondCard === 0) {
    secondCard = $(this).text();
    $(this).toggleClass("selected");
  }  
  
// check if cards match  
  if(firstCard !== 0 && secondCard !== 0){
    checkMatch(); 
    //reset card value
    firstCard = 0;
    secondCard = 0;
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
      $(".selected").toggleClass("matched cardFace selected");
      $('.top-right').notify({
        message: { text: 'Good Job!' },
        type: 'success'
      }).show();
    } else if(firstCard !== secondCard){
      // cards don't match
      $('.top-right').notify({
        message: { text: 'Sorry, try again!' },
        type: 'error'
      }).show();
      //reset selected card view
      $(".selected").animate({
        borderWidth: "3px"
      }, 2000, function (){
        $(".selected").toggleClass("cardFace selected");
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
  
//  var easyGame = function(){
//    $(".card").hide();
//  }; 
 
  // New Game handler
  $("#newGame").click(function () {
    newGame();
  });
  
  // hintShowAll handler
  $("#hintShowAll").click(function () {
    hintShowAll();
  });

//  $("#easyGame").click(function () {
//    easyGame();
//  };
    
}); //end doc.ready
