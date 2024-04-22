let userScore=0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencCompChoice = () => {
    //rock,paper,scissors
    const options = ["rock", "paper", "scissors"];
    //js doesn't have any function to randomly choose a string. But it has a Math.random() method which generate value from 0 to 1.
    // so when we multiply Math.random() *3 == it will give value from 0 to 1. we wanyt our choice among options[0->2] array.
    //Math.floor(Match.random()*3) => will give whole value, we will treat this as random index
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];


}
const drawGame = () => {
    //console.log("Game was draw.")
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "grey";
    
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats your  ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    //console.log("user choice = ",userChoice);
    //generate computer's choice
    const compChoice = gencCompChoice();
    //console.log("comp choice = ",compChoice);
    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userWin === "rock"){
            //comp will be scissors or paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
             userWin = compChoice === "scissors" ? false : true;

        }else{
            //rock,paper
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        //console.log("choice was clicked", userChoice);
        playGame(userChoice); //we will pass users choice to playgame so that comp can take their chance
    })
})