//Back End
var myIndexLeft = 0;
var myIndexRight = 0;


function Player(username, playerNumber, turnScore, totalScore) {
  this.username = username;
  this.playerNumber = playerNumber;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

function Dice(dice1, dice2) {
  this.dice1 = dice1;
  this.dice2 = dice2;
}

Dice.prototype.diceTotal = function() {
  return this.dice1 + this.dice2;
}

var dice = new Dice(0, 0);
var p1 = new Player("t1k1", 1, 0, 0);
var p2 = new Player("trivassi", 2, 0, 0);
var count = 0;



function diceRoll() {
  dice.dice1 = 1 + Math.floor(Math.random() * 6);
  dice.dice2 = 1 + Math.floor(Math.random() * 6);

  if ((count%2) === 0) {
    if (dice.dice1 != 1 && dice.dice2 != 1) {
      p1.turnScore += dice.diceTotal();
      return p1.turnScore;
    } else if (dice.dice1 === 1 || dice.dice2 === 1){
      p1.turnScore = 0;
      count += 1;
      return p1.turnScore;
    }
  } else if ((count%2) === 1){
    if (dice.dice1 != 1 && dice.dice2 != 1) {
      p2.turnScore += dice.diceTotal();
      return p2.turnScore;
    } else if (dice.dice1 === 1 || dice.dice2 === 1){
      p2.turnScore = 0;
      count += 1;
      return p2.turnScore;
    }
  }
}

//added
function carouselLeft() {
    var i;
    var x = document.getElementsByClassName("diceroll-left");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndexLeft++;
    if (myIndexLeft > x.length) {myIndexLeft = 1}
    x[myIndexLeft].style.display = "block";
    setTimeout(carouselLeft, 100); // Change image every 2 seconds
    }

    function carouselRight() {
        var i;
        var x = document.getElementsByClassName("diceroll-right");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";
        }
        myIndexRight++;
        if (myIndexRight > x.length) {myIndexRight = 1}
        x[myIndexRight].style.display = "block";
        setTimeout(carouselRight, 100); // Change image every 2 seconds
        }

$(document).ready(function() {

  // $(".diceRoll").show();

  $("#roll").click(function(event) {
    event.preventDefault();
    $("#turn-score").text(diceRoll());
    carouselLeft();
    carouselRight();

  //   var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
  //
  // blanks.forEach(function(blank) {
  //   var userInput = $("input#" + blank).val();
  //   $("." + blank).text(userInput);
  // });
  //
  // $("#story").show();

  // var leftpics = [1,2,3,4,5,6];
  //
  // leftpics.forEach(function(pic)) {
  //
  //   for (var dice.dice1 = 1; dice.dice1 < 7; dice.dice1++) {
  //     var showLeft = $("#left-dice" + leftpics)
  //     if (showLeft === dice.dice1) {
  //       showLeft.show();
  //     }
  //   }
  //
  // }
//
//   var imgArray = new Array();
// 
//   imgArray[0] = new Image();
//   imgArray[0].src = 'img/dice1.svg';
//
//   imgArray[1] = new Image();
//   imgArray[1].src = 'img/dice2.svg';
//
//   imgArray[2] = new Image();
//   imgArray[2].src = 'img/dice3.svg';
//
//   imgArray[3] = new Image();
//   imgArray[3].src = 'img/dice4.svg';
//
//   imgArray[4] = new Image();
//   imgArray[4].src = 'img/dice5.svg';
//
//   imgArray[5] = new Image();
//   imgArray[5].src = 'img/dice6.svg';
//
// /*------------------------------------*/
//
// function nextImage(element)
// {
//     var img = document.getElementById(element);
//
//     for(var i = 0; i < imgArray.length;i++)
//     {
//         if(imgArray[i].src == img.src) // << check this
//         {
//             if(i === imgArray.length){
//                 document.getElementById(element).src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById(element).src = imgArray[i+1].src;
//             break;
//         }
//     }
// }


  });

  $("#end").click(function(event) {
    event.preventDefault();

    if ((count%2) === 0) {
      p1.totalScore += p1.turnScore;
      $("#p1-total-score").text(p1.totalScore);
    } else if ((count%2) === 1) {
      p2.totalScore += p2.turnScore;
      $("#p2-total-score").text(p2.totalScore);
    }

    count += 1;
    p1.turnScore = 0;
    p2.turnScore = 0;
    $("#turn-score").text(0);

    if (p1.totalScore >= 100) {
      $(".playing").hide();
      $(".won").show();
      $("#username-won").text("Player 1 Wins");
      $("#user-points-won").text(p1.totalScore);
    } else if (p2.totalScore >= 100) {
      $(".playing").hide();
      $(".won").show();
      $("#username-won").text("Player 2 Wins");
      $("#user-points-won").text(p2.totalScore);
    }
  });

  $("#play").click(function(event) {
    event.preventDefault();

    $(".input-username").hide();
    $(".playing").show();

  });



});
