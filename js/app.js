$(document).ready(function(){
  var correctAnswer = ["1", "2", "3", "2"];
  var userGuessCorrect = 0;
  
  $(".q-one-box").on("click", ".answer-btn", function() {
    var guessOne = $('input[name="q-one"]:checked').val();
    userGuessCorrect += parseInt(guessOne);    
    $(".q-two-box").show();
    $(".q-one-box").hide();
  });
  
   $(".q-two-box").on("click", ".answer-btn", function() {
    var guessTwo = $("input[name=q-two]:checked").val();
  	userGuessCorrect += parseInt(guessTwo);
    $(".q-three-box").show();
    $(".q-two-box").hide();
  });
  
   $(".q-three-box").on("click", ".answer-btn", function() {
    var guessThree = $("input[name=q-three]:checked").val();  
    userGuessCorrect += parseInt(guessThree);
    $(".q-four-box").show(); /*change after test*/
    $(".q-three-box").hide();
  });
  
   $(".q-four-box").on("click", ".answer-btn", function() {
      var guessfour = $("input[name=q-four]:checked").val();
      userGuessCorrect += parseInt(guessfour);
    $(".q-five-box").show();
    $(".q-four-box").hide();
  });
    
  
    
    $(".q-five-box").on("click", ".answer-btn", function() {
      var guessfive = $("input[name=q-five]:checked").val();
      userGuessCorrect += parseInt(guessfive);
      	 
    $(".q-six-box").show();
    $(".q-five-box").hide();
  });
    
    
    $(".q-six-box").on("click", ".answer-btn", function() {
      var guesssix = $("input[name=q-six]:checked").val();
      userGuessCorrect += parseInt(guesssix);
      	 
    $(".q-seven-box").show();
    $(".q-six-box").hide();
  });
    
    
    $(".q-seven-box").on("click", ".answer-btn", function() {
      var guessseven = $("input[name=q-seven]:checked").val();
      userGuessCorrect += parseInt(guessseven);
      	  
    $(".q-eight-box").show();
    $(".q-seven-box").hide();
  });
    
    
     $(".q-eight-box").on("click", ".answer-btn", function() {
      var guesseight = $("input[name=q-eight]:checked").val();
      userGuessCorrect += parseInt(guesseight);
      	 
    $(".q-nine-box").show();
    $(".q-eight-box").hide();
  });
    
    
    
    $(".q-nine-box").on("click", ".answer-btn", function() {
      var guessnine = $("input[name=q-nine]:checked").val();
      userGuessCorrect += parseInt(guessnine);
      	 
    $(".q-ten-box").show();
    $(".q-nine-box").hide();
  });
    
    
    
    $(".q-ten-box").on("click", ".answer-btn", function() {
      var guessten = $("input[name=q-ten]:checked").val();
      userGuessCorrect += parseInt(guessten);
      	 
    $(".q-eleven-box").show();
    $(".q-ten-box").hide();
  });
    
    
    
    $(".q-eleven-box").on("click", ".answer-btn", function() {
      var guesseleven = $("input[name=q-eleven]:checked").val();
      userGuessCorrect += parseInt(guesseleven);
      	 
    $(".q-twelve-box").show();
    $(".q-eleven-box").hide();
  });
    
    
    
    $(".q-twelve-box").on("click", ".answer-btn", function() {
      var guesstwelve = $("input[name=q-twelve]:checked").val();
      userGuessCorrect += parseInt(guesstwelve);
      	  
    $(".q-thirteen-box").show();
    $(".q-twelve-box").hide();
  });
    
    
    
    $(".q-thirteen-box").on("click", ".answer-btn", function() {
      var guessthirteen = $("input[name=q-thirteen]:checked").val();
      userGuessCorrect += parseInt(guessthirteen);
      	  
    $(".q-fourteen-box").show();
    $(".q-thirteen-box").hide();
  });
    
    
    $(".q-fourteen-box").on("click", ".answer-btn", function() {
      var guessfourteen = $("input[name=q-fourteen]:checked").val();
      userGuessCorrect += parseInt(guessfourteen);
      	  
    $(".q-fifteen-box").show();
    $(".q-fourteen-box").hide();
  });

    
    $(".q-fifteen-box").on("click", ".answer-btn", function() {
      var guessfifteen = $("input[name=q-fifteen]:checked").val();
      userGuessCorrect += parseInt(guessfifteen);
      	 
    $(".q-sixteen-box").show();
    $(".q-fifteen-box").hide();
  });
    
    
    $(".q-sixteen-box").on("click", ".answer-btn", function() {
      var guesssixteen = $("input[name=q-sixteen]:checked").val();
      userGuessCorrect += parseInt(guesssixteen);
      	  
    $(".q-seventeen-box").show();
    $(".q-sixteen-box").hide();
  });
    
    
     $(".q-seventeen-box").on("click", ".answer-btn", function() {
      var guessseventeen = $("input[name=q-seventeen]:checked").val();
      userGuessCorrect += parseInt(guessseventeen);
      	 
    $(".q-eigthteen-box").show();
    $(".q-seventeen-box").hide();
  });
    
    
    $(".q-eigthteen-box").on("click", ".answer-btn", function() {
      var guesseightteen = $("input[name=q-eigthteen]:checked").val();
      userGuessCorrect += parseInt(guesseightteen);
      	 
    $(".q-nineteen-box").show();
    $(".q-eigthteen-box").hide();
  });
    
     
    
    $(".q-nineteen-box").on("click", ".answer-btn", function() {
      var guessnineteen = $('input[name=q-nineteen]:checked').val();
      userGuessCorrect += parseInt(guessnineteen);
      $(".final-score").html(userGuessCorrect);
    
    $(".q-twenty-box").show();
    $(".q-nineteen-box").hide();
  });
    
     
    
    $(".q-twenty-box").on("click", ".answer-btn", function() {
      var guesstwenty = $('input[name=q-twenty]:checked').val();
        
      userGuessCorrect += parseInt(guesstwenty);
      $(".final-score").html(userGuessCorrect);
    
    $(".endbox").show();
    $(".q-twenty-box").hide();
  });
    
  
  $(".endbox").on("click", ".reset", function(){
    $(".q-one-box").show();
    $(".endbox").hide();
    $("input[type='radio']").prop('checked', false);
    $(".final-score").html("0");
   userGuessCorrect = 0;
  });
  
});