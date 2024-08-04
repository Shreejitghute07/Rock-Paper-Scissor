let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice=() => {
    //rock,paper,scissors
    const option=["rock",'paper',"scissor"];
    const randIdx= Math.floor(Math.random() *3);
    return option[randIdx];
};
const drawGame=() =>{
    // console.log("Draw Game");
    // msg.innerText="Game was Draw ! Play Again";
    msg.innerText=`Game was Draw ! Play Again Yours ${userChoice} and ${compChoice} are same`;
    msg.style.backgroundColor="black";
};

const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You Win !");
        msg.innerText=`You Won !Yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("you Loose !");
        msg.innerText=`You Lost ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);
    if(userChoice==compChoice){
    drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock") {
            //paper scissor
            userWin = compChoice==="paper" ?false :true;
        }
        else if(userChoice==="paper"){
            //rock scissor
            userWin = compChoice==="scissor" ? false:true;
        }
        else{
            //rock paper
            userWin = compChoice==="rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        console.log("Choice was clicked",userChoice); 
        playGame(userChoice);
    });
});

