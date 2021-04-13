var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var bg, bg1;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  bg = loadImage("bg1.webp");
  bg1 = loadImage("bg2.jpg");
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(bg);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
