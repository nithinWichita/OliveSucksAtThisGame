var gamePattern=[];
var userClickedPattern=[];
var level = 0;

buttonColors = ["red","blue","green","yellow"];

$(document).on("keydown", function() {
    nextSequence();    
});



function nextSequence(){
    randomNumber = Math.floor(Math.random()*4);
    randomChosencolor = buttonColors[randomNumber];
    playSound(randomChosencolor);
    gamePattern.push(randomChosencolor);
    userClickedPattern = [];
    level += 1 ;
    $("h1").text("Level "+ level);
    $("#"+randomChosencolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    
}



$(".btn").on("click", function() {
    userChosenColor=$(this).attr("id");
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer((userClickedPattern.length)-1);
    if (userClickedPattern.length == gamePattern.length){
        
        setTimeout(() => {
            nextSequence(); 
        }, 1000);
    };
    
});

function playSound(sound){
    var audio = new Audio("sounds/"+sound+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColor).removeClass("pressed"); 
    }, 100);

}

function wrongAnswer(){
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(() => {
        $("body").removeClass("game-over"); 
    }, 300);

}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] != gamePattern[currentLevel]){
        wrongAnswer();
        $("h1").text("You SUCK! at this OLIVE!!! , Press Any Key to ReStart ");
        gamePattern = [];
        level = 0;
    }
    else{

    }
    
}