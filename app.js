//VARS

const roll = document.querySelector(".btn-roll");
const hold = document.querySelector(".btn-hold");
const newGame = document.querySelector(".btn-new");
const dice = document.querySelector(".dice");
const current1 = document.querySelector("#current-0");
const score1 = document.querySelector("#score-0");
const current2 = document.querySelector("#current-1");
const score2 = document.querySelector("#score-1");
const finalS = document.querySelector(".final-score");

const pannel = document.querySelector(".player-0-panel");
const pannel2 = document.querySelector(".player-1-panel");

var turn = "p1" ;

//EVENTS
 roll.addEventListener("click" , myRoll);
 hold.addEventListener("click" , myHold);
 newGame.addEventListener("click" , restart);

//FUNK

const arr =["dice-1.png","dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"];
 var mydice = 0;
 var points1= 0; 
 var mydice2 = 0;
 var points2= 0; 

score1.innerText = 0 ;
current1.innerText = 0;

score2.innerText = 0 ;
current2.innerText = 0;


function myRoll() {
  var s = Math.floor(Math.random() * 6);  
  const ye = dice.setAttribute("src" , arr[s]);
  if (turn == "p1") {
    mydice += s+1 ; 
    current1.innerText = mydice;
    if (arr[s] == "dice-1.png") {
      current1.innerText = 0;
      mydice = 0 ;
      turn = "p2";
      myActive();
    }
  }else{
    mydice2 += s+1 ; 
    current2.innerText = mydice2;
    if (arr[s] == "dice-1.png") {
      current2.innerText = 0;
      mydice2 = 0 ;
      turn = "p1";
      myActive();
    }
  }

}


function myHold() {
  if (turn == "p1") {
      points1 += mydice ;
      mydice = 0 ;
      current1.innerText = 0;
      score1.innerText = points1;
      turn = "p2";
  }else {
    points2 += mydice2 ;
    mydice2 = 0 ;
    current2.innerText = 0;
    score2.innerText = points2;
    turn = "p1";
   
}
winner();
myActive();

}

function myActive() {
  if (turn == "p1") {
    pannel2.classList.remove("active");
    pannel.classList.add("active");
  }else{
    pannel.classList.remove("active");
    pannel2.classList.add("active");
  
  }  
}

function winner() {
  var goal =  finalS.value;
  if (goal != "") {
    if (points1 > goal-1) {
      alert("player 1 Win!");
      restart();
    }
    if (points2 > goal-1) {
      alert("player 2 Win!");
      restart();
    }
  }else {
      if (points1 > 99) {
    alert("player 1 Win!");
    restart();
  }
  if (points2 > 99) {
    alert("player 2 Win!");
    restart();
  }
  }

}

function restart() {
   turn = "p1" ;
  finalS.value = "";

   mydice = 0;
   points1= 0; 
   mydice2 = 0;
   points2= 0; 
 
 score1.innerText = 0 ;
 current1.innerText = 0;
 
 score2.innerText = 0 ;
 current2.innerText = 0;

 pannel2.classList.remove("active");
 pannel.classList.add("active");
 
}
