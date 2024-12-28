const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const resetBtn = document.getElementById("reset");
const comp = document.getElementById("comp-choice")
const user = document.getElementById("user-choice")




let randomNum = Math.floor(Math.random() * buttons.length);
let score = 0;
let compSco = 0 ;
//let initGame = true;


const resetGame = () => {
  randomNum = Math.floor(Math.random() * buttons.length); 
  result.innerText = "";
  user.innerText = "" ;
  comp.innerText = ""
  resetBtn.style.display = "none";
  //initGame = true;
  buttons.forEach((button) => {
  button.disabled = false; 
  });
};


buttons.forEach((button) => {
  button.addEventListener("click", () => {
   // if (!initGame) return;

    if ((button.id == "paper" && buttons[randomNum].id =="rock" ) || (button.id == "scissor" && buttons[randomNum].id == "paper") || (button.id == "rock" && buttons[randomNum].id == "scissor")  ) {
      result.innerText = "You Won!";
      score++;
      userScore.innerText = score;

     // initGame = false; 
    }else if(button.id == buttons[randomNum].id ){
        result.innerText = "Draw"
      

    } else {
      result.innerText = "You Lose!";
      compSco++
      computerScore.innerText = compSco;
      
     // initGame = false; 
    }

    user.innerText = button.id ;
    comp.innerText = buttons[randomNum].id
    buttons.forEach((btn) => (btn.disabled = true));
    resetBtn.style.display = "block"; 
  });
});


resetBtn.addEventListener("click", resetGame);
resetBtn.style.display = "none"; 
