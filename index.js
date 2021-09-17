// Normal questions about of me

var readlinesync = require("readline-sync");
var userName = readlinesync.question("May i have your name? ");
console.log();
console.log("Hi " + "" + userName + ", welcome in the quiz");
console.log();
console.log();
console.log("In this quiz, there will be few questions about of me: ");
console.log();
 console.log("HOW WELL DO YOU KNOW ABOUT OF ME");
 console.log();
 console.log("Let's start the quiz..");
 console.log("-------------------------");
 var score = 0;

function quiz(askquestion,questionanswer)
{
  var userQuestion = readlinesync.question(askquestion);
  if(userQuestion.toUpperCase()===questionanswer.toUpperCase())
  {
    console.log("You are right.");
    score = score + 1;
    
  }else
  {
    console.log("You are wrong.");
    console.log("The right answer is: " + questionanswer);
    score = score-1;
  }
  console.log("Your score is: " + score);
  console.log("-----------------");
  }

var questions = [
  {
    askquestion: "What's my full name? ",
    questionanswer : "Bharat Dua"
  },


  {
    askquestion: "How old am i ? ",
    questionanswer : "21"
  },


  {
    askquestion: "Where do i live? ",
    questionanswer : "Rohtak,Haryana"
  },


  {
    askquestion: "What's my DOB? ",
    questionanswer : "13NOv1999"
  },


  {
    askquestion: "What did i study? ",
    questionanswer : "BCA( Bachlor of computer application"
  },
]
for(i=0;i<questions.length;i++){
  var answer = questions[i];
  
  quiz(answer.askquestion,answer.questionanswer)
};
console.log("Your high score is: " + score);
console.log("Thanks for play.")




















