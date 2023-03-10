var readlineSync = require('readline-sync')
var userName = readlineSync.question("hey what's your name? ");
let score=0;
console.log("hi "+ userName + ", are you a friends fan? ")
console.log("-----------------------------------------------")

console.log("type the answers in NUMBERS!")
console.log("-----------------------------------------------")

function add(question, answer){
  var answer_main = readlineSync.question(question);

  if(answer_main==answer){
    console.log("you are right")
    score=score+1;
  }
  else{
    console.log("you are wrong")
    score=score;
  }
  console.log("your score is: ", score);
  console.log("-----------------------------------------------")

}


let questions =[{
  question:"How many times did Ross get divorced? ",
  answer:"3"
},
  {
   question:"True or false, Rachel kissed all of her Friends (male and female) on the show ? ",
  answer:"true"
  },
  {
   question:"Monica categorizes her towels into how many categories ? ",
  answer:"11"
  },
                {
                  question:"According to Monica, a woman has how many erogenous zones? ",
  answer:"7"
                },
                {
                  question:"How many sisters does Joey have? ",
  answer:"7"
                }
               ]   ;
for(let i=0; i<questions.length;i++){
  add(questions[i].question, questions[i].answer)
}
console.log("your final score is: ", score)
console.log("------------------------")
console.log("------------------------")


if(score<= 4){
  console.log("you need to watch friends more :( ")
}   
  else if(score>=5 && score <=8){
    console.log("ah i see you're a friends fan :)")
    }
    else{
      console.log("you've scored" + score +" !")
       }
